
var over = document.getElementById("boody");

$("#openMenu").click(function(){
    over.style.overflowY="hidden";
    $("#menu").css("right", "0px");
    $(".background").fadeIn(100);
})

$("#close").click(function(){
    over.style.overflowY="scroll";
    $("#menu").css("right", "-500px");
    $(".background").fadeOut(500);
})

$(".end").click(function(){
    over.style.overflowY="scroll";
    $("#menu").css("right", "-500px");
    $(".background").fadeOut(500);
})

