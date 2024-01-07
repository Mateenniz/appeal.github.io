// functions/sendMail.js

const PHPMailer = require("../PHPMailer/src/PHPMailer.php");
const Exception = require("../PHPMailer/src/Exception.php");
const SMTP = require("../PHPMailer/src/SMTP.php");

// Example CORS headers
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event, context) {
  // Set CORS headers for all responses
  const responseHeaders = {
    ...headers,
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    // Handle preflight request
    return {
      statusCode: 200,
      headers: responseHeaders,
      body: JSON.stringify({ message: "Preflight Request Handled" }),
    };
  }

  // functions/sendMail.js

  const PHPMailer = require("../PHPMailer/src/PHPMailer.php");
  const Exception = require("../PHPMailer/src/Exception.php");
  const SMTP = require("../PHPMailer/src/SMTP.php");

  // Example CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  exports.handler = async function (event, context) {
    // Set CORS headers for all responses
    const responseHeaders = {
      ...headers,
      "Content-Type": "application/json",
    };

    if (event.httpMethod === "OPTIONS") {
      // Handle preflight request
      return {
        statusCode: 200,
        headers: responseHeaders,
        body: JSON.stringify({ message: "Preflight Request Handled" }),
      };
    }

    try {
      // Extract form data
      const body = JSON.parse(event.body);
      const name = body.name;
      const email = body.email;

      // Validate form data (you can add your own validation logic)

      // PHPMailer code
      const mail = new PHPMailer(true);

      // Server settings
      mail.isSMTP();
      mail.Host = "smtp.gmail.com";
      mail.SMTPAuth = true;
      mail.Username = "mateen.nizamani0@gmail.com";
      mail.Password = "wczkybivyzycsjdh";
      mail.SMTPSecure = "tls";
      mail.Port = 587;

      // Recipients
      mail.setFrom("mateen.nizamani0@gmail.com", "mateen");
      mail.addAddress("mateen.nizamani0@gmail.com", "mateen");

      // Content
      mail.isHTML(true);
      mail.Subject = "Subject of the email";
      mail.Body = `Name: ${name}<br>Email: ${email}`;

      // Send the email
      mail.send();

      return {
        statusCode: 200,
        headers: responseHeaders,
        body: JSON.stringify({ message: "Email sent successfully" }),
      };
    } catch (error) {
      console.error("Error:", error.message);
      return {
        statusCode: 500,
        headers: responseHeaders,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
};
