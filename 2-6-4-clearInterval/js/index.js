let fileNum = 1;
let picInterval;
const $pic = $('#Pic');
const $wrap = $('#Wrap');
const $btnNext = $('#BtnNext');
const $btnPrev = $('#BtnPrev');
const duration = 200;

$btnNext.click(doNext);
$btnPrev.click(doPrev);

// Initial
picInterval = setInterval(doNext, duration);

// Event
$wrap.hover(function() {
    clearInterval(picInterval);
}, function() { 
    picInterval =setInterval(doNext, duration);
});

function doNext() {
    if ( fileNum < 24 ) {
        fileNum += 1;
    } else {
        fileNum = 1;
    }
    $pic.attr('src', `./images/pic${fileNum}.jpg`);
};

function doPrev() {
    if(fileNum > 1){
        fileNum -= 1;
    } else {
        fileNum = 24;
    }
    $pic.attr('src', `./images/pic${fileNum}.jpg`);
};
