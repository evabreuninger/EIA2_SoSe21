"use strict";
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let colors = ["Crimson", "DarkSalmon", "DarkTurquoise", "SeaGreen", "SeaShell", "DimGray"];
        let textColors = ["Black", "White"];
        for (let index = 0; index < 150; index++) {
            let x = Math.floor(Math.random() * Math.floor(canvas.width));
            let y = Math.floor(Math.random() * Math.floor(canvas.height));
            let x2 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y2 = Math.floor(Math.random() * Math.floor(canvas.height));
            let x3 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y3 = Math.floor(Math.random() * Math.floor(canvas.height));
            let pickColor = Math.floor(Math.random() * Math.floor(6));
            let pickColorText = Math.floor(Math.random() * Math.floor(2));
            crc2.beginPath();
            crc2.arc(x, y, 190, 0, 2 * Math.PI, false);
            crc2.fillStyle = colors[pickColor];
            crc2.strokeStyle = colors[pickColor];
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = colors[pickColor];
            crc2.moveTo(x, y);
            crc2.lineTo(x2, y2);
            crc2.lineTo(x3, y3);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = textColors[pickColorText];
            crc2.strokeStyle = textColors[pickColorText];
            crc2.lineWidth = 3;
            crc2.font = "90px verdana";
            crc2.fillText("Canvas", x, y);
            crc2.strokeText("Canvas", x2, y2);
        }
    }
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst_script.js.map