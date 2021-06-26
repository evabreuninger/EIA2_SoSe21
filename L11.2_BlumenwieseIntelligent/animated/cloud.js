"use strict";
var eia11_1;
(function (eia11_1) {
    class Cloud extends eia11_1.AnimationType1 {
        constructor(x, y) {
            super(x, y, Math.random() * 1 + 1, 0);
            this.sizeX = 150;
        }
        update() {
            this.x += this.vX;
            if (this.x > eia11_1.canvas.width + this.sizeX)
                this.x = 0 - this.sizeX;
            this.draw();
        }
        draw() {
            eia11_1.c.beginPath();
            eia11_1.c.save();
            eia11_1.c.scale(1.5, 1.5);
            eia11_1.c.arc(this.x, this.y, 25, 0, Math.PI * 2);
            eia11_1.c.arc(this.x + 25, this.y - 10, 25, 0, Math.PI * 2);
            eia11_1.c.arc(this.x + 60, this.y, 20, 0, Math.PI * 2);
            eia11_1.c.arc(this.x + 25, this.y, 25, 0, Math.PI * 2);
            eia11_1.c.arc(this.x + 45, this.y, 20, 0, Math.PI * 2);
            eia11_1.c.fillStyle = "rgba(255,255,255,0.7)";
            eia11_1.c.fill();
            eia11_1.c.restore();
        }
    }
    eia11_1.Cloud = Cloud;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=cloud.js.map