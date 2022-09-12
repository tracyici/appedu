let fileNum = 1;
const $pic = $('#Pic');
const $btnPlay = $('#BtnPlay');
const $btnPause = $('#BtnPause');
let picInterval;
const duration = 100;

picInterval = setInterval(doNext, duration);

$btnPlay.click(function() {
    clearInterval(picInterval);
    picInterval = setInterval(doNext, duration);
});

$btnPause.click(function() {
    clearInterval(picInterval);
});

function doNext() {
    if (fileNum < 24) {
        fileNum += 1;
    } else {
        fileNum =1;
    }
    $pic.attr('src', './images/pic' + fileNum + '.jpg');
}