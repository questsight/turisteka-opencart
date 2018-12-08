<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
    $where = $_POST['where'];
    $from = $_POST['from'];
    $date= $_POST['date'];
    $sum = $_POST['sum'];
    $adults = $_POST['adults'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $formname = $_POST['form-name'];
	$error = '';
    //if(!$where) {$error .= 'Укажите место путешествия';}
    //if(!$from) {$error .= 'Укажите город отправления';}
    //if(!$date) {$error .= 'Укажите дату отправления';}
    //if(!$sum) {$error .= 'Укажите количество ночей';}
    //if(!$adults) {$error .= 'Укажите количество взрослых ';}
    //if(!$name) {$error .= 'Укажите свое имя ';}
    //if(!$phone) {$error .= 'Укажите свой телефон ';}
    //if(!$email) {$error .= 'Укажите свой e-mail';}
    if(!$error) {
	    $address = "turisteka@bk.ru";
	    $mes = "Форма: ".$formname."\n\nКуда: ".$where."\n\nОткуда: " .$from."\n\nДата: ".$date."\n\nКоличество ночей: ".$sum."\n\nКоличество людей: ".$adults."\n\nИмя: ".$name."\n\nТелефон: ".$phone."\n\nE-mail: ".$email."\n\n";
	    $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
    if($send) {echo 'OK';}
    }
    else {echo '<div class="err">'.$error.'</div>';}
}
?>