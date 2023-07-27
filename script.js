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
