$(function(){

  $("#seeMore").click(function() {
    $(".reveal").show();
    $("#seeMore").hide();
  });
  
  $("#seeLess").click(function() {
    $(".reveal").hide();
    $("#seeMore").show();
  });
  
  $("#openMap").click(function() {
    $("#map").show();
    $("#openMap").hide();
    $("#closeMap").show();
  });

  $("#closeMap").click(function() {
    $("#map").hide();
    $("#openMap").show();
    $("#closeMap").hide();
  });

});

