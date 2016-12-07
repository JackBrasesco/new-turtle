$("#text").keydown(function() {
  var whatToDraw = $("#text").val()
  var isSquare = whatToDraw.indexOf("square");
  if (isSquare > 0) {
    goForw
  }
})