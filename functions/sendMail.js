function submitForm() {
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
}
