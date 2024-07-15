<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer
// require 'path/to/PHPMailer/src/Exception.php'; // If manually downloading
// require 'path/to/PHPMailer/src/PHPMailer.php'; // If manually downloading
// require 'path/to/PHPMailer/src/SMTP.php'; // If manually downloading

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                           // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';      // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                  // Enable SMTP authentication
    $mail->Username   = 'omia.caralina@gmail.com'; // SMTP username
    $mail->Password   = 'yourpassword';        // SMTP password
    $mail->SMTPSecure = 'tls';                 // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                   // TCP port to connect to

    // Recipients
    $mail->setFrom('omia.caralina@gmail.com', 'Mailer');
    $mail->addAddress('rasberryjuiced@gmail.com', 'Receiver'); // Add a recipient

    // Content
    $mail->isHTML(true);                       // Set email format to HTML
    $mail->Subject = 'Test Email';
    $mail->Body    = 'This is a test email sent from PHP script using PHPMailer.';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
