$("#text").keydown(function(keyDown) {
  if (keyDown.keyCode == 13) {
    var whatToDraw = $("#text").val()
    var isSquare = whatToDraw.indexOf("square");
    var isRectangle = whatToDraw.indexOf("rectangle");
    var isOctogon = whatToDraw.indexOf("octogon");
    if (isSquare > 0) {
      goForward(300)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
    }
    else if (isRectangle > 0) {
      goForward(300);
      turnLeft()
      goForward(100);
      turnLeft()
      goForward(200);
      turnLeft()
      goForward(100);
    }
    else if (isOctogon > 0) {
      goForward(300);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
    }
  }
})

$("#button").click(function() {
  $(".a").html("KA CHOW!");
  $(".a").css({color: "red"});
  $("text").attr(value, "KA CHOW!!!")
  console.log("hi")
  $("#mcqeen").animate({left: -300}, 1000);
  setTimeout(function() {
    turtle.animate({left: 10000}, 500);
  }, 125)
})