$(document).ready(function(){
  $("button").click(function(){
    $("h4").toggle();
  });
});


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});