// $('#Item1').mouseenter(() => {
//     console.log(1234);
// });

// $('#Item1').mouseleave(() => {
//     console.log(56778);
// });

// $('#Item1').hover(function() {
//     console.log(1234);
// }, function() {
//     console.log(5678);
// });

$('#Item1').hover(function () {
    $('#Child1').stop(true, false).slideDown();
}, function () {
    $('#Child1').stop(true, false).slideUp();
});

$('#Item2').hover(function () {
    $('#Child2').stop(true, false).slideDown();
}, function () {
    $('#Child2').stop(true, false).slideUp();
});

$('#Item3').hover(function () {
    $('#Child3').stop(true, false).slideDown();
}, function () {
    $('#Child3').stop(true, false).slideUp();
});

$('#Item4').hover(function () {
    $('#Child4').stop(true, false).slideDown();
}, function () {
    $('#Child4').stop(true, false).slideUp();
});

$('#Item5').hover(function () {
    $('#Child5').stop(true, false).slideDown();
}, function () {
    $('#Child5').stop(true, false).slideUp();
});
