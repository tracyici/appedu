const duration = 500, $rocket = $('#Rocket')

$('#BtnRight').click(function () {
$rocket.stop(true, false).animate({left:'+=200'}, duration, 'easeOutBack');
});

$('#BtnLeft').click(function () {
    $rocket.stop(true, false).animate({left:'-=200'}, duration, 'easeOutBack');
});

