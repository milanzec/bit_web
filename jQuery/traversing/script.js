var gallery1 = $('<div class="gallery"></div>');
var gallery2 = $('<div class="gallery"></div>');
var oneImg = '<img src="https://via.placeholder.com/350">';
var imgs = [];

function selectImgsRedBorder() {
    $(".selected").removeClass('selected');
    $('.gallery').next().find('img:eq(1)').addClass('selected');
}


for (var i = 0; i < 3; i++) {
    imgs.push(oneImg);
}


$.each(imgs, function () {
    gallery1.append(this);
    gallery2.append(this);
})
$("body").append(gallery1);
$("body").append(gallery2);

$('.gallery:eq(0)').find('img:eq(1)').addClass('selected');


$('img:eq(1)').click(function () {
    selectImgsRedBorder();
});