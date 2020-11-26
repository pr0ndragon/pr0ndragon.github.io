$(document).ready(function() {
    $.getJSON("https://www.googleapis.com/drive/v3/files?access_token=ya29.a0AfH6SMALG0CTlV-eNurg2F3lyaH0DwVsFtcG7UxlYz_KKyeds4hdYkjjZ_Hi1PhR1Pod9-VqqFUHhQLewfYfnGgIMUy7R1DV6CnntmwX-_rENicuTfTX5MF3oS09fvBJnpLKp7cBqgsRj4u3ibGIwXkpL4FmQa3opITFk_ZMxuU", function(json) {
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
    }); //uc?export=view file:///C:/Users/tarik/Desktop/workspace/gallery/gallery.html
});