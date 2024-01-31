function sendEmail() {
  console.log("hello");
  var form = document.getElementById("myForm"); // Make sure your form has the correct ID
  var formData = new FormData(form);

  fetch("sendMail.php", {
    method: "POST",
    mode: "cors",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle success or error messages in the frontend
      if (data.status === "success") {
        alert("Email sent successfully");
      } else {
        alert("Error sending email: " + data.message);
      }
    })
    .catch(error => console.error("Error:", error));
}
