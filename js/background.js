function executeFeatures() {
    chrome.tabs.getSelected(null, function (tab) {
        // Only perform features on valid webpages
        if (/^http*/.test(tab.url)) {
            chrome.storage.sync.get(null, function (obj) {
                /* Do Contrast Feature */
                if (!obj.contrast) {
                    obj.contrast = {
                        "scriptFile": "contrast/defaultText.js",
                        "name": "defaultText"
                    };
                }
                chrome.tabs.executeScript(null, { file: "js/" + obj.contrast.scriptFile });

                /* Do Filter Feature */
                if (!obj.filter) {
                    obj.filter = {
                        "scriptFile": "filter/defaultFilter.js",
                        "name": "defaultFilter"
                    };
                }
                chrome.tabs.executeScript(null, { file: "js/" + obj.filter.scriptFile });

                // IMPLEMENT OTHER FEATURES HERE
                // 1. Check for data that is stored
                //  1.1. if it does not exist, then populate with default
                // 2. Execute the script
            });
        }
    });
}

// When the extension has started
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        executeFeatures();
    });
})

// When any tab is updated (ie refreshes)
chrome.tabs.onUpdated.addListener(tab => {
    executeFeatures();
})

// When a tab is switched
chrome.tabs.onActivated.addListener(tab => {
    executeFeatures();
})
