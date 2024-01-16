<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anonymous Secrets Website</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333;
    }

    header {
      background-color: #4285f4;
      color: #fff;
      text-align: center;
      padding: 1em;
    }

    section {
      max-width: 800px;
      margin: 2em auto;
      padding: 1em;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    h1, h2, h3 {
      color: #4285f4;
    }

    a {
      color: #1a0dab;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    p, ul, ol {
      line-height: 1.6;
      margin-bottom: 1.2em;
    }

    code {
      background-color: #f2f2f2;
      padding: 0.2em;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }

    .icon {
      margin-right: 0.2em;
    }

    .btn {
      display: inline-block;
      padding: 0.5em 1em;
      background-color: #4285f4;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }

    .btn:hover {
      background-color: #1a0dab;
    }
  </style>
</head>
<body>
  <header>
    <h1><i class="fas fa-lock icon"></i> Anonymous Secrets Website</h1>
  </header>
  <section>
    <h2>Project Overview</h2>
    <p>The Anonymous Secrets Website provides a space for users to share their secrets without revealing their identities. Developed with a user-friendly interface, this website leverages Google and Facebook OAuth for secure and hassle-free user authentication.</p>

    <h2>Key Features</h2>
    <ul>
      <li><strong>HTML Structure:</strong> Utilizes HTML for creating a structured and accessible web page.</li>
      <li><strong>CSS Styling:</strong> Enhances the visual appeal with CSS for a clean and modern design.</li>
      <li><strong>JavaScript Logic:</strong> Incorporates JavaScript for dynamic content and interactive features.</li>
      <li><strong>OAuth Authentication:</strong> Integrates Google and Facebook OAuth for secure and convenient user authentication.</li>
    </ul>

    <h2>Anonymous Secrets Website Features</h2>
    <ul>
      <li><strong>Anonymous Posting:</strong> Allows users to post their secrets without revealing their identities.</li>
      <li><strong>OAuth Authentication:</strong> Enables users to log in securely using their Google or Facebook accounts.</li>
      <li><strong>User-Specific Content:</strong> Differentiates between users to display their own secrets and maintain anonymity.</li>
      <li><strong>Responsive Design:</strong> Ensures a seamless experience on various devices with a responsive layout.</li>
      <li><strong>User-Friendly Interface:</strong> Provides an intuitive and easy-to-use interface for posting and viewing secrets.</li>
    </ul>

    <h2>Getting Started</h2>
    <ol>
      <li><strong>Clone the repository:</strong></li>
      <code>git clone https://github.com/your-username/anonymous-secrets-website.git</code>

      <li><strong>Navigate to the project folder:</strong></li>
      <code>cd anonymous-secrets-website</code>

      <li><strong>Open <code>index.html</code> in your preferred browser.</strong></li>
      <p>The Anonymous Secrets Website will be accessible locally.</p>
    </ol>

    <h2>OAuth Integration</h2>
    <ul>
      <li>Obtain OAuth credentials from Google and Facebook developer portals.</li>
      <li>Update the OAuth configuration in the JavaScript file (<code>script.js</code>) with your credentials.</li>
    </ul>

    <h2>Customization</h2>
    <p>Feel free to customize the website based on your specific needs or add additional features to enhance its functionality. The code is well-documented to assist in understanding and modifying the application.</p>

    <h2>Contributions</h2>
    <p>Excited to contribute or make improvements? Here's how:</p>
    <ol>
      <li><strong>Fork the repository.</strong></li>
      <li><strong>Create a dedicated branch for your changes:</strong> <code>git checkout -b feature/new-feature</code></li>
      <li><strong>Commit your changes:</strong> <code>git commit -m 'Implement new feature'</code></li>
      <li><strong>Push to your branch:</strong> <code>git push origin feature/new-feature</code></li>
      <li><strong>Submit a pull request.</strong></li>
    </ol>
    <p>Your contributions are valued in making the Anonymous Secrets Website an effective and secure platform for anonymous sharing.</p>

    <p>Happy coding and secret sharing!</p>

    <a class="btn" href="#!"><i class="fab fa-github icon"></i> View on GitHub</a>
  </section>
</body>
</html>
