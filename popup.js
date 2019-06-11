var port = chrome.extension.connect({
    name: "sending Communication"
});
port.postMessage("start");
port.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
});







