let index = 0;
let picInterval;
const duration = 2000;

const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');
const $pagination = $('#Pagination');
const $paginationItems = $pagination.find('.pagination-item');

// Initial (img/buttom postion)
$paginationItems.eq(index).addClass('js-pagination-item');
$slideImgInner.css('left', -index * 100 + '%');
picInterval = setInterval(setSlide, duration);

// Event
$slide.hover(function() {
    clearInterval(picInterval);
}, function() {
    picInterval = setInterval(setSlide, duration);
});

$paginationItems.click(function() {
    index = $(this).index();
    $slideImgInner.css('left', -index * 100 + '%');
    $paginationItems
    .eq(index).addClass('js-pagination-item')
    .siblings().removeClass('js-pagination-item');
});
    
function setSlide () {
    if (index < 4) {
        index += 1;
    } else {
        index = 0;
    }
    $slideImgInner.css('left', -index * 100 + '%');
    $paginationItems
    .eq(index).addClass('js-pagination-item')
    .siblings().removeClass('js-pagination-item');
};