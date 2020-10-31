function executeFeatures() {
    chrome.tabs.getSelected(null, function (tab) {
        if (/^http*/.test(tab.url)) {
            chrome.storage.sync.get("contrast", function (obj) {
                if (!obj.contrast) {
                    obj.contrast = {
                        "scriptFile": "contrast/default.js",
                        "name": "default"
                    };
                }
                chrome.tabs.executeScript(null, { file: "js/" + obj.contrast.scriptFile });
            });
        }
    });
}

chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        executeFeatures();
    });
})

chrome.tabs.onUpdated.addListener(tab => {
    executeFeatures();
})

chrome.tabs.onActivated.addListener(tab => {
    executeFeatures();
})
