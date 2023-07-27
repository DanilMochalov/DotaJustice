<?php
$host = "localhost";
$username = "u2149623_gurufav";
$password = "uO2zL8fR9yxL7jA8";
$dbname = "u2149623_reportDB";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$sql = "SELECT steamLink, report FROM reportStats";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
} else {
    echo "Нет данных в БД";
}

$conn->close();
?>
