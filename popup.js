console.log("loaded");

let ret = () => {
    chrome.storage.sync.get(['key'], function(result) {
        console.log(`Saved String: ${result.key}`)
    })
}; //returns string set by set()

let set = (string) => {
    chrome.storage.sync.set({"key": string}, function() {
        console.log("string has been reset to:"+ string)
    })
} //sets string

document.getElementById("submitButton").addEventListener("click", e=> {
	let s = document.getElementById("string");
    set(s.value)
    s.value="";
})

ret();
