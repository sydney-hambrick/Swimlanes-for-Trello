chrome.scripting.onUpdated.addListener(function (tabId, changeInfo, tab){
  //only apply to Trello pages
  var regex = new RegExp(/.*:\/\/trello\.com\/b\/.*/);
  var match = regex.exec(tab.url);

  //setup page for layout changes and show page action
  if (match) {
    chrome.scripting.executeScript(null, {file: 'setup.js'});
    chrome.action.show(tabId);
  }
  else {
    chrome.action.hide(tabId);
  }
});

chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript(null, {file: 'toggle.js'});
}); 
