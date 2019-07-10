var frame;
// var menuBar;
// var footer;
var contentBody;
window.onload = function (ev) {
    frame = document.getElementById('frame');
    contentBody = document.querySelector('.content-body');
    bindLinks();
    autoFrameSize();
}

window.onresize = () => {
    autoFrameSize();
};

function autoFrameSize() {
    var width = contentBody.clientWidth;
    var height = contentBody.clientHeight;
    frame.width = width + "px";
    frame.height = height + "px";
}

function bindLinks() {
    var links = document.querySelectorAll('.menu-bar a');
    links.forEach(function (value) {
        if (value instanceof Element) {
            value.addEventListener('click', () => {
                frame.src = value.dataset.mySrc;
            });
        }
    });
}

//
// window.onresize = function (ev) {
//     autoChangeSize();
// }
//
// function autoChangeSize() {
//     var width = document.body.clientWidth || screen.availWidth;
//     var height = screen.availHeight || document.body.clientHeight;
//     contentBody.width = width + "px";
//     contentBody.height = (height - menuBar.clientHeight - footer.clientHeight-footer.clientHeight) + "px";
// }
