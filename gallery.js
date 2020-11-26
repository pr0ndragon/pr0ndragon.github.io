$(document).ready(function() {
    $.getJSON("https://www.googleapis.com/drive/v3/files?access_token=ya29.a0AfH6SMCg2vsf_6XUv98cpk1GPILrXqZ3tAoziNrkfJOKplp7pMnW5awAqYJu3pyxavyO7uLSuI5ByDNIQFDkb7NYv32kqMmeZhVO6MmtHjhZhx0XVSSW9Hed267nYdygFOEhEG0v_xb4B95KiEoITGtXo_xr3ZyUhKCQ9z8jVLs", function(json) {
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
