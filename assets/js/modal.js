// Get the modal
// var modal = document.getElementById('myModal');
var popup001 = document.getElementById('popup001');
var popup002 = document.getElementById('popup002');
var popup003 = document.getElementById('popup003');
var popup004 = document.getElementById('popup004');

var popclose001 = document.getElementById('popclose001');
var popclose002 = document.getElementById('popclose002');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks the button, open the modal
bibtex001.onclick = function() {
  popup001.style.display = "block";
}

// When the user clicks the button, open the modal
bibtex002.onclick = function() {
  popup002.style.display = "block";
}

// When the user clicks the button, open the modal
bibtex003.onclick = function() {
  popup003.style.display = "block";
}

// When the user clicks the button, open the modal
bibtex004.onclick = function() {
  popup004.style.display = "block";
}

// When the user clicks the button, open the modal
popclose001.onclick = function() {
  popup001.style.display = "none";
}

// When the user clicks the button, open the modal
popclose002.onclick = function() {
  popup002.style.display = "none";
}

// When the user clicks the button, open the modal
popclose003.onclick = function() {
  popup003.style.display = "none";
}

// When the user clicks the button, open the modal
popclose004.onclick = function() {
  popup004.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  alert("I am an alert box!");
  // popup001.style.display = "none";
  // popup002.style.display = "none";
  // popup003.style.display = "none";
  // popup004.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // if (event.target == modal) {
  //   modal.style.display = "none";
  // }
  if(event.target == popup001){
    popup001.style.display = "none";
  }
  else if(event.target == popup002){
    popup002.style.display = "none";
  }
  else if(event.target == popup003){
    popup003.style.display = "none";
  }
  else if(event.target == popup004){
    popup004.style.display = "none";
  }
}
