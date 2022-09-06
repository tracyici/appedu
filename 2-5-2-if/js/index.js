let fileNum = 1;
const $pic = $('#Pic');

$pic.attr('src', './images/ui0' +fileNum+ '.jpg');
$pic.click(function(){
//   fileNum = fileNum + 1;
//   $(this).attr('src', './images/ui0' +fileNum+ '.jpg');
   if(fileNum >= 4) {
    fileNum = 1
   } else {fileNum++};
   $(this).attr('src', './images/ui0' +fileNum+ '.jpg');
});