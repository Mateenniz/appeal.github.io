console.log("Client-side script loaded!");

const subForm = document.querySelector("#btnsub");
subForm.addEventListener("click", function () {
  // Get form data
  var formData = new FormData(document.getElementById("myForm"));

  // Log form data to the console
  formData.forEach(function (value, key) {
    console.log(key, value);
  });

  // Use AJAX to submit the form data to Netlify serverless function
  fetch("./functions/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then(response => response.json())
    .then(data => {
      console.log("Form submitted successfully!", data);
    })
    .catch(error => {
      console.error("Form submission failed.", error);
    });
});
