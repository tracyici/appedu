const $content = $('#Content'),
//            指定
$btnLg = $('#BtnLg'),
$btnSm = $('#BtnSm')

$btnLg.click(function(){
    $content.css({
        'fontSize': '1.5em',
        'fontWeight': 400,
        'fontStyle':'italic',
        'color':'grey'
    });
});

$btnSm.click(function(){
    $content.css('fontSize', 15)
});