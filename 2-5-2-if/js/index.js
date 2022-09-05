let fileNum = 1;
const $pic = $('#Pic');

$pic.attr('src', './images/ui0' +fileNum+ '.jpg');
$pic.click(function(){
   if(fileNum > 4) {
    './images/ui0' +fileNum-4+ '.jpg'
   } else {' fileNum = fileNum + 1'};
//    $(this).attr('src', './images/ui0' +fileNum+ '.jpg');
});