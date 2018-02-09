<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Создание формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL=http://freshhouse-clean.ru/pricelist.html">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,500,700" rel="stylesheet">
</head>
<body>
<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter47255544 = new Ya.Metrika2({ id:47255544, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/47255544" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
<header class="page-header">
  <div class="page-header__wrapper">
    <a class="page-header__logo" href="index.html">Fresh House</a>
    <span class="page-header__note">Cleaning company</span>
  </div>
  <nav class="main-nav">
      <ul class="main-nav__list">
        <li class="main-nav__item"><a class="main-nav__item-link main-nav__item-link--active" href="index.html#services">Услуги</a></li>
        <li class="main-nav__item"><a class="main-nav__item-link" href="pricelist.html">Цены</a></li>
      </ul>
  </nav>
  <div class="social social--header">
    <div class="social__wrapper social__wrapper--header">
        <a class="social__link social__link--vk" href="https://vk.com/freshhouseclean" target="_blank">vk</a>
        <a class="social__link social__link--inst" href="https://www.instagram.com/freshhouse.clean" target="_blank">inst</a>
        <a class="social__link social__link--fb" href="https://www.facebook.com/Fresh-House-363124174099586" target="_blank">fb</a>
      </div>
  </div>
  <div class="page-header__contacts">
    <a class="page-header__contacts-phone">+7(985)117-42-22</a>
    <span class="page-header__contacts-discr">Уборка квартир в Москве</span>
    <span class="page-header__contacts-time">пн - вс: 09:00 - 19:00</span>
  </div>
</header>
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
$msg .= "<p><strong>Услуги :</strong> ".$summa."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
  echo '<main>
  <div class="promo-block promo-block--send">
    <div class="container">
      <div class="promo-block__wrapper promo-block__wrapper--send">
        <div class="send">
            <h1 class="send__title">Ваш заказ принят!</h1>
            <p class="send__text">Наш менеджер свяжется с Вами в течении 10 минут!</p>
          </div>
      </div>
    </div>
  </div>
</main>';
} else {
  echo '<main>
  <div class="promo-block promo-block--send">
    <div class="container">
      <div class="promo-block__wrapper promo-block__wrapper--send">
        <div class="send">
            <h1 class="send__title send__title--error">Произошла ошибка!</h1>
            <p class="send__text">Пожалуйста обновите страницу и попробуйте еще раз.</p>
          </div>
      </div>
    </div>
  </div>
</main>';
}

?>
<footer class="page-footer">
  <div class="container container--footer">
    <div class="contacts" id="contacts">
      <div class="contacts__wrapper">
        <span class="contacts__title">Позвоните:</span>
        <a class="contacts__text">+7(985)117-42-22</a>
      </div>
      <div class="contacts__wrapper">
        <span class="contacts__title">Напишите:</span>
        <a class="contacts__text" href="mailto:service.freshhouse@gmail.com">service.freshhouse@gmail.com</a>
      </div>
    </div>
    <div class="social social--footer">
      <div class="social__wrapper social__wrapper--footer">
        <a class="social__logo" href="index.html">Fresh House</a>
      </div>
      <div class="social__wrapper social__wrapper--footer">
        <a class="social__link social__link--vk" href="https://vk.com/freshhouseclean" target="_blank">vk</a>
        <a class="social__link social__link--inst" href="https://www.instagram.com/freshhouse.clean" target="_blank">inst</a>
        <a class="social__link social__link--fb" href="https://www.facebook.com/Fresh-House-363124174099586" target="_blank">fb</a>
      </div>
    </div>
  </div>
</footer>
</body>
</html>
