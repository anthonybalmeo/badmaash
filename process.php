<?php
$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
// validate the variables ======================================================
if (empty($_POST['name']))
$errors['name'] = 'Name is required.';
if (empty($_POST['email']))
$errors['email'] = 'Email is required.';
if (empty($_POST['message']))
$errors['message'] = 'Message is required.';
// return a response ===========================================================
// response if there are errors
if ( ! empty($errors)) {
  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Whoops! Your emai wasn\'t sent. Please fix them so we can get back to you!';
} else {
  // if there are no errors, return a message
  $data['success'] = true;
  $data['messageSuccess'] = 'Hey! Thanks for reaching out. We will get back to you soon!';
  // CHANGE THE TWO LINES BELOW
  $email_to = "info@badmaashla.com";
  $email_subject = "Email from BadmaaashLA Contact Form : ".strtoupper($_POST['name']);
  $name = $_POST['name']; // required
  $email_from = $_POST['email']; // required
  $message = $_POST['message']; // required
  $email_message = "Form Details:\n\n";
  $email_message .= "Name: ".$name."\n";
  $email_message .= "Email: ".$email_from."\n";
  $email_message .= "Message: ".$message."\n";
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);


}
// return all our data to an AJAX call
echo json_encode($data);
