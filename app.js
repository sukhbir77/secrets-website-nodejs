require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our Little Secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////// HOME ////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.get("/", function(req, res) {
  res.render("home");
});

///////////////GOOGLE ////////////////////
app.get("/auth/google", passport.authenticate("google", {scope: ["profile"]}));

app.get("/auth/google/secrets",
  passport.authenticate("google", {failureRedirect: "/login"}),
  function(req, res){
    res.redirect("/secrets");
  }
);
/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////// LOGIN ///////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.get("/login", function(req, res) {
  res.render("login");
});

//145021888531-h995un7iaq3pc2ir29i3ji30s9fstsia.apps.googleusercontent.com
//Msm8N1p_VqKToTmq1DlfNVc6
/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////// REGISTER ////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.get("/register", function(req, res) {
  res.render("register");
});

/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////// SECRETS /////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.get("/secrets", function(req, res){
User.find({"secret" : {$ne: null}}, function(err, foundUsers){
  if(err)
  {
    console.log(err);
  }
  else {
    if(foundUsers){
      res.render("secrets", {allSecrets: foundUsers});
    }
  }
});
});

///////////////////////////////////////////////
/////////////SUBMIT SECRET ///////////////////
app.get("/submit", function(req, res){
  if(req.isAuthenticated()){
    res.render("submit");
  }
  else{
    res.redirect("/login");
  }
});
/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////POST SECRET  /////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.post("/submit", function(req, res){
  const secret = req.body.secret;

  console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if(err){
      console.log(err);
    }
    else{
      if(foundUser){
        foundUser.secret = secret;
        foundUser.save(function(){
          res.redirect("/secrets")
        });
      }
    }
  });
});
/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////POST REGISTER/////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.post("/register", function(req, res){
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if(err){
      console.log(err);
      res.redirect("/register");
  }
  else{
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secrets");
    });
  }
  });
});

/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////POST Login ///////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.post("/login", function(req, res){
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if(err)
    {
      console.log(err);
    }
    else{
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets");
      });
    }
  });
});

/////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////// LOGOUT /////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/")
});




app.listen(3000, function() {
  console.log("Server is running on Port 3000");
});
