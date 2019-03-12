$(function () {

    // ----- Creating Elements and Title -----

    var imgGalleryTitle = $('<h1></h1>');
    var imgGallery = $('<div></div>');
    var isGreen;

    var wholeImgs = ["https://via.placeholder.com/350",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350"
    ];

    imgGalleryTitle.text('Amazing Gallery');

    // ----- Append Images -----

    $.each(wholeImgs, function (i, el) {
        imgGallery.append('<img src=' + el + ">");
    })

    $('body').prepend(imgGallery);
    $('body').prepend(imgGalleryTitle);

    // ------Change Size of Imgs--------------

    $('div img').each(function () {
        var random = Math.floor(Math.random() * 350 + 1);
        $(this).css({
            'width': random + 'px',
            'height': random + 'px'
        });

        if (random < 200) {
            if (isGreen !== false) {
                $(this).css('border', '1px solid green');
            }
        } else {
            isGreen = false;
        }
    })
});