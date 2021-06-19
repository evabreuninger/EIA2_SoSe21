"use strict";
var eia11_1;
(function (eia11_1) {
    class Mountain extends eia11_1.Landscape {
        width;
        pointAmount;
        points = [];
        constructor(x, y, width, height) {
            super(x, y, height);
            this.width = width;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            for (let i = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.width / this.pointAmount) + (this.x + (this.width / this.pointAmount) * i), Math.random() * this.height / 1.25 + this.y]);
            }
        }
        draw() {
            eia11_1.c.beginPath();
            eia11_1.c.moveTo(this.x, this.y + this.height);
            eia11_1.c.lineTo(this.x, this.y + this.height / 2);
            for (let i = 0; i < this.pointAmount; i++) {
                eia11_1.c.lineTo(this.points[i][0], this.points[i][1]);
            }
            eia11_1.c.lineTo(this.x + this.width, this.y + this.height / 2);
            eia11_1.c.lineTo(this.x + this.width, this.y + this.height);
            let gradient = eia11_1.c.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            eia11_1.c.fillStyle = gradient;
            eia11_1.c.fill();
        }
    }
    eia11_1.Mountain = Mountain;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=mountain.js.map