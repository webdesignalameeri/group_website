<?php
if($_SERVER['REQUEST_METHOD']!=='POST'||!empty($_POST['website'])){header('Location: contact-us.html');exit;}
$f=function($k){return trim(str_replace(["\r","\n"],' ',strip_tags($_POST[$k]??'')));};
$email=filter_var($_POST['email']??'',FILTER_VALIDATE_EMAIL);
if(!$email||!$f('name')||!trim($_POST['message']??'')){header('Location: contact-us.html?sent=0');exit;}
$body="Name: ".$f('name')."\nPhone: ".$f('phone')."\nEmail: $email\n\n".strip_tags($_POST['message']);
$ok=mail('info@alameeri.com','Website enquiry: '.$f('subject'),$body,"From: no-reply@alameeri.com\r\nReply-To: $email");
header('Location: contact-us.html?sent='.($ok?1:0));
