<?php

$host = "localhost";
$username = "u2149623_gurufav";
$password = "uO2zL8fR9yxL7jA8";
$dbname = "u2149623_reportDB";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$steamLink = $_POST["steamLink"];
$complaintReason = $_POST["complaintReason"];

$sql = "INSERT INTO ваша_таблица (steamLink, report) VALUES ('$steamLink', '$complaintReason')";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно сохранены";
} else {
    echo "Ошибка при сохранении данных: " . $conn->error;
}

$conn->close();
?>
