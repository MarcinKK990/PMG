
<?php

// $mainEmail = 'biuro.4b@pmgpartner.pl';
$mainEmail = 'marcink90@onet.pl';
$mailLabel = 'Wiadomość z formularza';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
//$fileName = isset($_FILES['file']) ? $_FILES['file']['tmp_name'] : null;
 $file= isset($_FILES['file']) ? $_FILES['file'] : null;

$text = 'Mail from : ' . $name;
$text .= $message;

function sendMail(
    array $file,
    string $mailMessage = MAIL_CONF["mailMessage"],
    string $subject     = MAIL_CONF["subject"],
    string $toAddress   = MAIL_CONF["toAddress"],
    string $fromMail    = MAIL_CONF["fromMail"]
): bool {
   
   // $fileAttachment = trim($fileAttachment);
    $from           = $fromMail;
    // $pathInfo       = pathinfo($fileAttachment);
    // $attchmentName  = "attachment_".date("YmdHms").(
    // (isset($pathInfo['extension']))? ".".$pathInfo['extension'] : ""
    // );
   
    // $attachment    = chunk_split(base64_encode(file_get_contents($fileAttachment)));
    // $boundary      = "--PHP-mixed-".md5(time())."--";
    // $boundWithPre  = "\n--".$boundary;
   
    // $headers   = "From: $from";
    // $headers  .= "\nReply-To: $from";
    // $headers  .= "\nContent-Type: multipart/mixed; boundary=\"".$boundary."\"";
   
    // $message   = $boundWithPre;
    // $message  .= "\n Content-Type: text/plain; name=\"$fileAttachment\" charset=UTF-8\n";
    // $message  .= "\n $mailMessage";
   
    // $message .= $boundWithPre;
    // $message .= "\nContent-Type: application/octet-stream; name=\"".$attchmentName."\"";
    // $message .= "\nContent-Transfer-Encoding: base64\n";
    // $message .= "\nContent-Disposition: attachment\n";
    // $message .= $attachment;
    // $message .= $boundWithPre."--";

    $filename =  $file['name'];
    $filePath = $file['tmp_name'];
    $file_size =  $file['size'];
    $handle = fopen($filePath, "rb");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));
    $uid = md5(uniqid(time()));
    $name = $file['name'];
    $header = "From: Test <".$fromMail.">\r\n";
    $header .= "Reply-To: ".$toAddress."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $mailMessage."\r\n\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use different content types here
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $header .= $content."\r\n\r\n";
    $header .= "--".$uid."--";

    var_dump($header);

    return mail($toAddress, $subject, "", $header);
    // return mail($toAddress, $subject, $message, $headers);
}


function sendHtmlMail(
    string $mailMessage = MAIL_CONF["mailMessage"],
    string $subject     = MAIL_CONF["subject"],
    array $toAddress    = MAIL_CONF["toAddress"],
    string $fromMail    = MAIL_CONF["fromMail"]
): bool {
   
    $to        = implode(",", $toAddress);
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';   
    $headers[] = 'To: '.$to;
    $headers[] = 'From: '.$fromMail;   

    return mail($to, $subject, $mailMessage, implode("\r\n", $headers));
}

if($file){
    sendMail($file, $text, $mailLabel, $mainEmail, $email);
} else {
    sendHtmlMail($text, $mailLabel, [$mainEmail], $email);
}


?>