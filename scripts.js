/* 
let string = {"key": "This is the default string"};
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set(string, function() {
        console.log("The string has been set");
    });
    chrome.storage.local.get(['key'], function(result) {
        console.log(result.key)
    })
  });
*/
//commented out section that sets and retrieves string automatically

let ret = () => {
    chrome.storage.local.get(['key'], function(result) {
        console.log(`Returned string: ${result.key}`)
    })
}; //returns string set by set()

let set = (string) => {
    chrome.storage.local.set({"key": string}, function() {
        console.log("string has been reset")
    })
} //sets string
