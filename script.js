$("#text").keydown(function() {
  if (keyDown.keyCode == 13 {
      var whatToDraw = $("#text").val()
    var isSquare = whatToDraw.indexOf("square");
    if (isSquare > 0) {
      goForward(300)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
    }
  })
})