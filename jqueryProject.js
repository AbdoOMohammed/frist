var over = document.getElementById("boody");

$("#openMenu").click(function(){
    over.style.overflowY="hidden";
    $("#menu").show(300);
    $(".background").show(100);
})
$("#close").click(function(){
    over.style.overflowY="scroll";
    $("#menu").hide(400);
    $(".background").hide(100);
})
