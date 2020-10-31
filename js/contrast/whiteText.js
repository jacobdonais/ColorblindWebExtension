if (document.getElementById("contrast")) {
    document.getElementById('contrast').remove()
}

var styles = `
* {
    background-color: black !important;
    color: white !important;
  }
`

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
styleSheet.id = "contrast";
document.head.appendChild(styleSheet);
