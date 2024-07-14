<?php
$to = "omiacaralina@gmail.com";
$subject = "Test Email";
$body = "This is a test email sent from PHP script.";
$headers = "From: omiacaralina@gmail.com";

if (mail($to, $subject, $body, $headers)) {
    echo "Test email successfully sent!";
} else {
    echo "Test email sending failed.";
}
?>
