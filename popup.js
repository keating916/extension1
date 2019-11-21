console.log("loaded");

let ret = () => {
    chrome.storage.sync.get(['key'], function(result) {
        console.log(`Returned string: ${result.key}`)
    })
}; //returns string set by set()

let set = (string) => {
    chrome.storage.sync.set({"key": string}, function() {
        console.log("string has been reset")
    })
} //sets string

document.getElementById("submitButton").addEventListener("click", e=> {
	let s = document.getElementById("string");
	set(s.value)
	console.log(s.value);
})

ret();
