console.log('whatsapp-web-bot is connected');

chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
        console.log("popup Connected	" + msg);
        port.postMessage(msg);

    });
});

