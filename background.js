chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            if (tab.url.includes('.pdf')) {
                chrome.downloads.download({
                    url: tab.url
                });
            }
        });
    });
});
