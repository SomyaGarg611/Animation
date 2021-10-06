var id = null;
var pos = 0;
function myMove() {
  var elem = document.getElementById("sail");
  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (pos == 1160) {
      pos=0;
      elem.style.left = pos + 'px';
      
    }
    else {
      pos++;
      elem.style.left = pos + 'px';
      
    }
  }
}
function Stop() {
  var elem = document.getElementById("sail");
  clearInterval(id);
}
