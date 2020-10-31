if (document.getElementById("contrast")) {
    document.getElementById('contrast').remove()
}

var styles = `
* {
    background-color: white !important;
    color: black !important;
  }
`

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
styleSheet.id = "contrast";
document.head.appendChild(styleSheet);
