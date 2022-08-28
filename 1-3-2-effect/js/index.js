$('#Thumb1').click(function(){
    $('#Pic1').fadeIn();
    $('#Pic2, #Pic3, #Pic4, #Pic5').fadeOut();
})

$('#Thumb2').click(function(){
    $('#Pic2').fadeIn();
    $('#Pic1, #Pic3, #Pic4, #Pic5').fadeOut();
})

$('#Thumb3').click(function(){
    $('#Pic3').fadeIn();
    $('#Pic2, #Pic1, #Pic4, #Pic5').fadeOut();
})

$('#Thumb4').click(function(){
    $('#Pic4').fadeIn();
    $('#Pic2, #Pic3, #Pic1, #Pic5').fadeOut();
})

$('#Thumb5').click(function(){
    $('#Pic5').fadeIn();
    $('#Pic2, #Pic3, #Pic4, #Pic1').fadeOut();
})