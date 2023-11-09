chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  //only apply to Trello pages
  var regex = new RegExp(/.*:\/\/trello\.com\/b\/.*/);
  var match = regex.exec(tab.url);

  //setup page for layout changes and show page action
  if (match) {
    chrome.tabs.executeScript(null, {file: 'setup.js'});
    chrome.pageAction.show(tabId);
  }
  else {
    chrome.pageAction.hide(tabId);
  }
});

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {file: 'toggle.js'});
}); 
