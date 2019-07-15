setInterval(() => {
    var date = new Date();
    postMessage(date.toLocaleTimeString());
}, 1000);