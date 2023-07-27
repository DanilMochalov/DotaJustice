function submitComplaint() {
    var steamLink = document.getElementById("steamLink").value;
    var complaintReason = document.getElementById("complaintReason").value;

    var xhr = new XMLHttpRequest();
    var url = "submit_complaint.php"; 

    var formData = new FormData();
    formData.append("steamLink", steamLink);
    formData.append("complaintReason", complaintReason);

    xhr.open("POST", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
         
            alert("Жалоба добавлена");
            document.getElementById("steamLink").value = "";
            document.getElementById("complaintReason").value = "";
        } else {
            alert("Ошибка при сохранении жалобы");
        }
    };

    xhr.send(formData);
}

// Функция для получения данных из базы данных и добавления их в таблицу
function fetchDataFromDB() {
    var xhr = new XMLHttpRequest();
    var url = "get_data_from_db.php"; // Путь к PHP-скрипту для получения данных из БД

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Получаем данные в формате JSON
                var data = JSON.parse(xhr.responseText);

                // Очищаем содержимое таблицы
                var tableBody = document.getElementById("data");
                tableBody.innerHTML = "";

                // Добавляем данные в таблицу
                data.forEach(function (item) {
                    var newRow = document.createElement("tr");
                    var steamLinkCell = document.createElement("td");
                    var reportCell = document.createElement("td");

                    steamLinkCell.innerHTML = "<a href='" + item.steamLink + "'>" + item.steamLink + "</a>";
                    reportCell.textContent = item.report;

                    newRow.appendChild(steamLinkCell);
                    newRow.appendChild(reportCell);
                    tableBody.appendChild(newRow);
                });
            } else {
                console.log("Ошибка при получении данных из БД");
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

// Получение данных из БД и добавление их в таблицу сразу при загрузке страницы
fetchDataFromDB();