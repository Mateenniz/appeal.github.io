console.log("Script loaded!");
require("../PHPMailer/src/Exception.php");
require("../PHPMailer/src/PHPMailer.php");
require("../PHPMailer/src/SMTP.php");
// functions/sendMail.js

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

  // Your existing function logic goes here
  // ...
};
const subForm = document.querySelector("#btnsub");
subForm.addEventListener("click", function () {
  // Get form data
  var formData = new FormData(document.getElementById("myForm"));

  // Log form data to the console
  formData.forEach(function (value, key) {
    console.log(key, value);
  });

  // Use AJAX to submit the form data to Netlify serverless function
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/.netlify/functions/sendMail", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed. Status code: " + xhr.status);
      }
    }
  };

  // Convert FormData to JSON and send it
  var formDataJson = {};
  formData.forEach(function (value, key) {
    formDataJson[key] = value;
  });

  xhr.send(JSON.stringify(formDataJson));
});
