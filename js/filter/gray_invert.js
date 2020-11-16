/* Grayscale Filter Feature */

// Local Variables
var FEATURE = "filter"

// Remove any other feature styling
if (document.getElementById(FEATURE)) {
  document.getElementById(FEATURE).remove()
}

// Create the style
var styles = `
html {
    -moz-filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    filter: gray; /* IE6-9 */
    filter: grayscale(100%) invert(100%);
  }
`

// Apply the style to the page
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
styleSheet.id = FEATURE;
document.head.appendChild(styleSheet);
