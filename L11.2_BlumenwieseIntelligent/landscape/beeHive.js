"use strict";
var eia11_1;
(function (eia11_1) {
    class BeeHive extends eia11_1.Landscape {
        constructor(x, y, height) {
            super(x, y, height);
        }
        draw() {
            eia11_1.c.save();
            eia11_1.c.translate(this.x, this.y);
            // colors
            eia11_1.c.fillStyle = "#FFB90F";
            eia11_1.c.strokeStyle = "#996633";
            eia11_1.c.lineWidth = 4;
            // top bit
            eia11_1.c.beginPath();
            eia11_1.c.moveTo(0, 0);
            eia11_1.c.arc(-18, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.arc(18, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.rect(-18, -10, 36, 20);
            eia11_1.c.stroke();
            eia11_1.c.fill();
            // 2nd
            eia11_1.c.translate(0, 20);
            eia11_1.c.beginPath();
            eia11_1.c.arc(-25, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.arc(25, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.rect(-25, -10, 50, 20);
            eia11_1.c.stroke();
            eia11_1.c.fill();
            // 3rd
            eia11_1.c.translate(0, 20);
            eia11_1.c.beginPath();
            eia11_1.c.arc(-30, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.arc(30, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.rect(-30, -10, 60, 20);
            eia11_1.c.stroke();
            eia11_1.c.fill();
            // 4th
            eia11_1.c.translate(0, 20);
            eia11_1.c.beginPath();
            eia11_1.c.arc(-30, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.arc(30, 0, 10, 0, 2 * Math.PI);
            eia11_1.c.rect(-30, -10, 60, 20);
            eia11_1.c.stroke();
            eia11_1.c.fill();
            // entrance hole
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "#663300";
            eia11_1.c.arc(0, 0, 8, 0, 2 * Math.PI);
            eia11_1.c.fill();
            eia11_1.c.restore();
        }
    }
    eia11_1.BeeHive = BeeHive;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=beeHive.js.map