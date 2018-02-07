<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Создание формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL=http://freshhouse-clean.ru/pricelist.html">
</head>
<body>

<?php

$sendto   = "service.freshhouse@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

$usermetro = $_POST['metro'];   // сохраняем в переменную данные полученные из поля c именем
$useraddress = $_POST['address']; // сохраняем в переменную данные полученные из поля c телефонным номером
$userentrance = $_POST['entrance']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$userfloor = $_POST['floor'];   // сохраняем в переменную данные полученные из поля c именем
$userkey = $_POST['key']; // сохраняем в переменную данные полученные из поля c телефонным номером

$userdate = $_POST['date']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usertime =$_POST ['time']; // сохраняем данные из выпадающего списка

$usercomments =$_POST ['comments']; // сохраняем данные из выпадающего списка
$summa =$_POST ['summa']; // холодильник


// $userhoover = '';
//   if (empty($_POST["hoover"]))
//   {
//      $userhoover = "Пылесос не нужен";
//   }
//   elseif (!empty($_POST["hoover"]) && is_array($_POST["hoover"]))
//   {
//      $userhoover = "Пылесос нужен";
//   }

// Формирование заголовка письма
$subject  = "Заявка на уборку";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";

$msg .= "<p><strong>Метро:</strong> ".$usermetro."</p>\r\n";
$msg .= "<p><strong>Адрес:</strong> ".$useraddress."</p>\r\n";
$msg .= "<p><strong>Подъезд:</strong> ".$userentrance."</p>\r\n";
$msg .= "<p><strong>Этаж:</strong> ".$userfloor."</p>\r\n";
$msg .= "<p><strong>Домофон:</strong> ".$userkey."</p>\r\n";
$msg .= "<p><strong>Дата:</strong> ".$userdate."</p>\r\n";
$msg .= "<p><strong>Время:</strong> ".$usertime."</p>\r\n";
$msg .= "<p><strong>Комментарии:</strong> ".$usercomments."</p>\r\n";
// $msg .= "<p><strong>Пылесос:<br/> </strong> ".$userhoover."</p>\r\n";
$msg .= "<p><strong>Доп услуги :</strong> ".$summa."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<center><img src='spasibo.png'></center>";
} else {
	echo "<center><img src='ne-otpravleno.png'></center>";
}

?>

</body>
</html>
