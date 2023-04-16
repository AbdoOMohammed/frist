
var over = document.getElementById("boody");

$("#openMenu").click(function(){
    over.style.overflowY="hidden";
    $("#menu").show(400);
    $(".background").show(300);
})

$("#close").click(function(){
    over.style.overflowY="scroll";
    $("#menu").hide(400);
    $(".background").hide(300);
})

$(".end").click(function(){
    over.style.overflowY="hidden";
    $("#menu").hide(600);
    $(".background").hide(600);
})
///////////////////////////////

$(".b3").click(function(){
    $(".hhh").animate({
        width: "toggle"
    });
});
