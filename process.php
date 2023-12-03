<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you have form data processing logic here

    // Extract form data
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
   
    // Add more fields as needed

    // PHPMailer code
    $mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                           // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';            // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                    // Enable SMTP authentication
    $mail->Username = 'mateen.nizamani0@gmail.com';  // SMTP username
    $mail->Password = 'qvfzqgwnqieabnzg';   // SMTP password
    $mail->SMTPSecure = 'tls';                 // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                         // TCP port to connect to

    //Recipients
    $mail->setFrom('mateen.nizamani0@gmail.com', 'mateen');
    $mail->addAddress('mateen_nizamani@hotmail.com', 'me');  // Add a recipient
 
    // Content
    $mail->isHTML(true);                       // Set email format to HTML
    $mail->Subject = 'Subject of the email';
    $mail->Body = "Name: $name <br>Email: $email";
  
    
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
} } else {
    // If the form is not submitted, provide an error response
    echo 'Form submission failed. Please try again.';
}
?>