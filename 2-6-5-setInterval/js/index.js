let index = 0;
const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');
const duration = 2000;

// Initial
picInterval = setInterval(setSlide, duration);

// Event
$slide.hover(function() {
    clearInterval(picInterval);
}, function() {
    picInterval = setInterval(setSlide, duration);
});

function setSlide () {
    if (index < 4) {
        index += 1;
    } else {
        index = 0;
    }
    $slideImgInner.css('left', -index * 100 + '%');
};