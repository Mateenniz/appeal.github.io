function submitForm() {
  // Get form data
  var formData = new FormData(document.getElementById("myForm"));

  // Log form data to the console
  formData.forEach(function (value, key) {
    console.log(key, value);
  });

  // Use AJAX to submit the form data
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "process.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Form submitted successfully!");
    }
  };
  xhr.send(formData);
}
