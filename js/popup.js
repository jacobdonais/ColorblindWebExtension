// the JavaScript file that interacts with the pop-up

/*
The typical data package we want to send between popup
and background is:
    <type> : {
        name: <name>
        scriptFile: <script filename>
    }
*/

// This is used to open a port between background and popup
var port = chrome.extension.connect({});

// This function sends data to background.js
function refreshBackground() {
    port.postMessage(1);
}

// This function will save data to the storage
function saveData(data) {
    chrome.storage.sync.set(data);
}

// This function will clear the storage
function clearStorage() {
    chrome.storage.clear();
}

// Apply Feature Buttons
chrome.storage.sync.get(function (obj) {
    // do feature.contrast
    if (!obj.contrast) {
        obj.contrast = {
            "scriptFile": "contrast/default.js",
            "name": "default"
        };
    }
    document.getElementById(obj.contrast.name).checked = true;
    doContrast(obj.contrast);

    // IMPLEMENT OTHER FEATURES HERE
    // 1. Add a default feature if setting is not already configured
    // 2. Configure menu with previous values
    // 3. Execute the change
});

// Add actions to contrast radio buttons
var radios = document.getElementsByName('contrast');
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        doContrast({ "name": this.value });
        refreshBackground();
    }
}

// IMPLEMENT OTHER FEATURES HERE
// 1. Get feature options
// 2. Add onclick listener to feature options
//   2.1. Perform feature
//   2.2. refreshBackground()

// functions for Contrast functionalities
/* 
    This can accept two types of data:
    data = {
        name: <name>
    }
    OR
    data = {
        name: <name>
        scriptFile: <script filename>
    }
*/
function doContrast(data) {
    switch (data.name) {
        case 'black':
            data.scriptFile = "contrast/blackText.js"
            break;
        case 'white':
            data.scriptFile = "contrast/whiteText.js"
            break;
        default:
            data.scriptFile = "contrast/defaultText.js"
            break;
    }
    saveData({ "contrast": data });
}

// IMPLEMENT OTHER FEATURES HERE
// 1. each feature function needs to take in data
//  1.1. This data is formatted with a name and scriptfile
// 2. Save the data to memory with saveData
//    (Please keep in mind that a change to storage will be 
//     picked up by background.js event listener)
