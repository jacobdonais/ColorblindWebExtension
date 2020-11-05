/* White text on Black background feature */

// Local Variables
var FEATURE = "contrast"

// Remove any other feature styling
if (document.getElementById(FEATURE)) {
  document.getElementById(FEATURE).remove()
}

// Create the style
var styles = `
* {
    background-color: black !important;
    color: white !important;
  }
`

// Apply the style to the page
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
styleSheet.id = FEATURE;
document.head.appendChild(styleSheet);
