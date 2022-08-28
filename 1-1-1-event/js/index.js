// 標題一“的”click事件
// $('h1').on('click', function(){
//     alert('我是標題ㄧ') 
// });
// $('p').on('click',function(){
//     alert('我是段落')
// })

// 匿名函式
$('h1').click(function() {
    alert('我是標題ㄧ')
});
$('p').click(function(){
    alert('我是段落')
});

// 箭頭函式
// $('h1').click(()=>{alert('我是標題')});
// 函數
// function getTitle(){
//     alert('我是標題ㄧ')
// };

// function getParagraph(){
//     alert('我是段落')
// }