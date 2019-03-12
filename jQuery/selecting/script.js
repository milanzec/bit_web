$(function () {
    $('li:eq(0)').addClass('bottomBorder');
    $('li').addClass('uppercase');
    $('li.active').addClass('red');
    $('li:eq(1)').addClass('backgroundGray');
    $('ul').hide().delay(300).fadeIn(2000);
});
