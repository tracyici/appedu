const $thumbItems = $('#ThumbLs > img');
const $picItems = $('#PicLs > img');
// 使用let宣告的變數可以重新賦值
let index = 2;
// 初始化
$picItems.eq(index).fadeIn().
siblings().fadeOut();
// 事件
$thumbItems.click(function(){
    // 取得當事者的索引值（由0開始）
    index = $(this).index();
    $picItems
    .eq(index).fadeIn()
    .siblings().fadeOut();
});