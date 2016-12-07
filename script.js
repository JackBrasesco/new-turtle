$("#text").keydown(function(keyDown) {
  if (keyDown.keyCode == 13) {
    var whatToDraw = $("#text").val()
    var isSquare = whatToDraw.indexOf("square");
    var isRectangle = whatToDraw.indexOf("rectangle");
    var isPentagon = whatToDraw.indexOf("pentagon");
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
    else if (isPentagon
  }
})