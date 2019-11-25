chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.prifina.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
  }
);//Only show popup on "Prifina.com

let minutesForInterval=1;//changes how often a new string is retrieved

let api = "https://api.punkapi.com/v2/beers/random"
   
let set = (string) => {
  chrome.storage.sync.set({"prifinaKey": string}, function() {
      console.log("string has been reset to:"+ string)
  })
} //sets string

let getApiString = () => {
  let response = fetch(api)
      .then(response => response.json())
      .then(data => {
        set(data[0].name);
      })
}//API call and string set
getApiString();//run on startup

chrome.runtime.onInstalled.addListener(function() {
  setInterval(function() {
    getApiString()}, 1000*60*minutesForInterval);
});//run after startup on interval
