var over = document.getElementById(".boody");
$("#openMenu").click(function(){
    $(".background").show(100);
    $(".sidebar").show(300);
})
$("#close").click(function(){
    $(".sidebar").hide(300);
    $(".background").hide(100);
})
//var size = 768;
//var screen = screen.width;
//console.log("screen.width after = " + screen);
//if( screen >= size){
//    console.log("screen.width = " + screen);
//    $(".sidebar").show(300);
//}