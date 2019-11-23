console.log("loaded");
let section = document.getElementById("stringSection");
let p = document.createElement("h1");
section.appendChild(p);
let ret = () => {
    chrome.storage.sync.get(["prifinaKey"], function(result) {
        let s = `requesting: ${result.prifinaKey}`;
        p.textContent = s;
    })
}; //returns string set by set() in scripts.js
ret();


setInterval(function() {
    ret()
}, 1000)
