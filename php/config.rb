<?php 
$name=$_REQUEST['name']; 
    $email=$_REQUEST['email']; 
    $message=$_REQUEST['message']; 
    if (($name=="")||($email=="")||($message=="")) 
        { 
        echo "<script type='text/javascript'>alert('$message');</script>";
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="Message sent using your contact form"; 
        mail("anthonybalmeo@gmail.com", $subject, $message, $from); 
        echo "<script type='text/javascript'>alert('$message');</script>";
        } 
    }   
?> 