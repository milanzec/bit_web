$('body').on('click', function (e) {
    $('.player').css({
        'top': e.pageY - 35 + 'px',
        'left': e.pageX - 35 + 'px'
    })
})

$('button').click(function () {
    $('body').off('click');
})