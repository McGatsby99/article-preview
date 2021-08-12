var popUp = document.getElementById("pop-up-bar");
var button = document.getElementById("share");

button.onclick = function(){
  //check if its open
  var open = document.getElementsByClassName("open");
  if (open.length > 0){
    popUp.className = "pop-up";
    button.className = "share-button";
  } else {
  //else open
  popUp.className = "open" ;
  button.className = "open-button";
  }
}