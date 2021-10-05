var id = null;
function myMove() {
  var elem = document.getElementById("sail");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 1190) {
      clearInterval(id);
    } else {
      pos++;
      
      elem.style.left = pos + 'px';
    }
  }
}
