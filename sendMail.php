<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $recipient = $_POST['recipient'];
    $subject = $_POST['subject'];
    // $message = $_POST['message'];


    //Server settings
    $mail = new PHPMailer(true);

    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                           // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';            // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                    // Enable SMTP authentication
    $mail->Username = 'mateen.nizamani0@gmail.com';  // SMTP username
    $mail->Password = 'wczkybivyzycsjdh';   // SMTP password
    $mail->SMTPSecure = 'tls';                 // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587; 

    $mail->setFrom('mateen.nizamani0@gmail.com', 'Your Name');
$mail->addAddress('mateen.nizamani0@gmail.com', 'a Name');
$mail->Subject = $subject;
$mail->isHTML(true);
$mail->Body    = $recipient;

    try {
        $mail->send();
        echo 'Email has been sent successfully';
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
}
?>