"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let documentDiveElements = document.querySelectorAll("div");
        for (let i = 0; i < documentDiveElements.length; i++) {
            documentDiveElements[i].addEventListener("click", logInfo);
            documentDiveElements[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let mouseCoordinates = "x coordinates: " + x + "| y coordinates: " + y;
        let theTarget = _event.target;
        let span = document.querySelector("span");
        span.innerHTML = mouseCoordinates + theTarget;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map