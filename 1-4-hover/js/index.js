$('#Item1').hover(function(){
    $('#Child1').stop(true,false).slideDown();},
    function(){
        $('#Child1').stop(true,false).slideUp();
    })