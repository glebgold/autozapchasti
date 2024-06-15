<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "your-email@example.com";
        $subject = "Новое сообщение с вашего сайта";
        $body = "Имя: $name\n\nEmail: $email\n\nСообщение:\n$message";
        $headers = "From: $name <$email>";

        if (mail($to, $subject, $body, $headers)) {
            echo "Сообщение успешно отправлено.";
        } else {
            echo "Не удалось отправить сообщение. Попробуйте позже.";
        }
    } else {
        echo "Заполните все поля формы правильно.";
    }
} else {
    echo "Ошибка при отправке формы.";
}
?>
