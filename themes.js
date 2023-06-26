$(document).on('click', '#light', function() {
    $('body').css({'background-color': 'white', 'color': 'black'});
    $('header').css('border-bottom', '1px solid black');
    $('footer').css('border-top', '1px solid black');
    $('header > img, footer >img').attr('src', 'light_ouroboros.jpg');
    $('main > img').attr('src', 'light_break.png');
    $('header > button').css({'background-color': 'white', 'border-color': 'black'});
})

$(document).on('click', '#dark', function() {
    $('body').css({'background-color': 'black', 'color': 'white'});
    $('header').css('border-bottom', '1px solid white');
    $('footer').css('border-top', '1px solid white');
    $('header > img, footer > img').attr('src', 'ouroboros.jpg');
    $('main > img').attr('src', 'break.png');
    $('header > button').css({'background-color': 'blueviolet', 'color': 'black'});
})
