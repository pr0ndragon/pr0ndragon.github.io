$(document).ready(function() {
    $.getJSON("https://www.googleapis.com/drive/v3/files?key=AIzaSyA_q_mKzUdiZNe5vevrvijJ6vYWCSQf3jI", function(json) {
        $.each(json.files, function(i, item) {
            if (json.files[i].mimeType != "application/vnd.google-apps.folder") {
                if (json.files[i].mimeType == "image/jpeg") {
                    $("<img>").attr("src", "https://drive.google.com/uc?export=view&id=" + json.files[i].id).appendTo(".gallery-container");
                } else if (json.files[i].mimeType == "video/mp4") {
                    $(".gallery-container").append("<video class='video" + i + "' autoplay muted loop></video>")
                    $("<source>").attr("src", "https://drive.google.com/uc?export=view&id=" + json.files[i].id).appendTo(".video" + i);
                };
            };
        });
    });
});