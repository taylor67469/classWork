var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var elements = [
  h1El, h2El, h3El, pEl
];
//type of font element
var typeface;

// changes the font
//option changed activate this event
typefaceEl.addEventListener("change", function(event) {
  //prevents default of form
  event.preventDefault();
  //changes typeface to value of font
  typeface = typefaceEl.value;
  //changes font of container class
  document.querySelector(".container").style.fontFamily = typeface;
});

// adds the text to the bottom
textAreaEl.addEventListener("keydown", function(event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
    });
  }
});
//clears everything
clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});
