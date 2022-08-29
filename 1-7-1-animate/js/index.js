const timer = 500

$('#BtnRight').click(function(){
    $('#Rocket').animate({
        left:1000,
        top:200
    }, timer);
});

$('#BtnLeft').click(function(){
    $('#Rocket').animate({
        left:0,
        top:0
    }, timer);
});