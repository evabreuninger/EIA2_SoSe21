"use strict";
var eia11_1;
(function (eia11_1) {
    class Bee extends eia11_1.AnimationType1 {
        time;
        changeTime;
        scale;
        constructor(x, y) {
            super(x, y, Math.random() * 8 - 4, Math.random() * 8 - 4);
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
        }
        update() {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.draw();
        }
        draw() {
            eia11_1.c.beginPath();
            eia11_1.c.ellipse(this.x, this.y, this.scale, this.scale * 0.7, (this.vX > 0) ? -Math.PI / 10 : Math.PI / 10, 0, 2 * Math.PI);
            eia11_1.c.fillStyle = "yellow";
            eia11_1.c.lineWidth = 5;
            eia11_1.c.strokeStyle = "black";
            eia11_1.c.stroke();
            eia11_1.c.fill();
            eia11_1.c.beginPath();
            eia11_1.c.arc((this.vX > 0) ? this.x + this.scale / 3 : this.x - this.scale / 3, this.y - this.scale / 6, this.scale / 5, 0, Math.PI * 2);
            eia11_1.c.fillStyle = "black";
            eia11_1.c.fill();
            eia11_1.c.beginPath();
            if (this.time % 4 < 2) {
                eia11_1.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : -Math.PI / 8, 0, Math.PI * 2);
            }
            else {
                eia11_1.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            eia11_1.c.fillStyle = "rgba(180,180,180, 0.7)";
            eia11_1.c.fill();
            eia11_1.c.lineWidth = 2;
            eia11_1.c.strokeStyle = "rgb(100,100,100)";
            eia11_1.c.stroke();
        }
        updateVelocities() {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }
            if (this.x >= eia11_1.canvas.width - this.scale) {
                this.vX = -this.vX;
                this.x = eia11_1.canvas.width - this.scale;
            }
            if (this.x <= 0 + this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }
            if (this.y >= eia11_1.canvas.height - this.scale) {
                this.vY = -this.vY;
                this.y = eia11_1.canvas.height - this.scale;
            }
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }
        }
    }
    eia11_1.Bee = Bee;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=bee.js.map