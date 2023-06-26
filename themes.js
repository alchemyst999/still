$(document).on('click', '#light', function() {
    $('body').css({'background-color': 'white', 'color': 'black'});
    $('header').css('border-bottom', '1px solid black');
    $('footer').css('border-top', '1px solid black');
    $('header > img, footer >img').attr('src', 'media/light_ouroboros.jpg');
    $('main > img').attr('src', 'media/light_break.png');
    $('header > button').css({'background-color': 'white', 'border-color': 'black'});
})

$(document).on('click', '#dark', function() {
    $('body').css({'background-color': 'black', 'color': 'white'});
    $('header').css('border-bottom', '1px solid white');
    $('footer').css('border-top', '1px solid white');
    $('header > img, footer > img').attr('src', 'media/ouroboros.jpg');
    $('main > img').attr('src', 'media/break.png');
    $('header > button').css({'background-color': 'blueviolet', 'color': 'black'});
})