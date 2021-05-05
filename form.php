<!DOCTYPE html>
<html>
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") { // checks whether a POST request actually exists or not.

    $user_subject = strip_tags(trim($_POST['subject']));
    $user_message = strip_tags(trim($_POST['message']));

    $send_to = 'bzubovic@outlook.com';

    mail($send_to, $user_subject, $subject_message);

}
?>
</html>


