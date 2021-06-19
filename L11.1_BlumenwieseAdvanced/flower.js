"use strict";
var eia11_1;
(function (eia11_1) {
    class Flower extends eia11_1.Landscape {
        type;
        scale;
        color;
        nectarLevel;
        maxLevel;
        timeout;
        constructor(x, y, height) {
            super(x, y, height);
            this.type = Math.round(Math.random() + 1);
            this.scale = Math.random() * 4 + 10;
            this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            this.nectarLevel = Math.random() * 4;
            this.maxLevel = this.maxLevel;
            this.timeout = this.timeout;
        }
        draw() {
            switch (this.type) {
                case 1:
                    this.flowerType1();
                    break;
                case 2:
                    this.flowerType2();
                    break;
            }
        }
        flowerType1() {
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "rgb(0, 150, 0)";
            eia11_1.c.fillRect(this.x, this.y, 6, -this.height);
            //Nektar-Balken
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "HSLA(0, 0%, 0%, 0.4)";
            eia11_1.c.fillRect(this.x + 10, this.y, 6, -this.nectarLevel);
            eia11_1.c.closePath();
            eia11_1.c.beginPath();
            let gradient = eia11_1.c.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            eia11_1.c.fillStyle = gradient;
            eia11_1.c.fillRect(0, 0, eia11_1.canvas.width, eia11_1.canvas.height);
        }
        flowerType2() {
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "rgb(0,150,0)";
            eia11_1.c.fillRect(this.x, this.y, 6, -this.height);
            //Nektar-Balken
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "HSLA(0, 0%, 0%, 0.4)";
            eia11_1.c.fillRect(this.x + 10, this.y, 6, -this.nectarLevel);
            eia11_1.c.closePath();
            eia11_1.c.beginPath();
            eia11_1.c.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            eia11_1.c.fillStyle = "yellow";
            eia11_1.c.fill();
            for (let i = 1; i <= 8; i++) {
                eia11_1.c.beginPath();
                eia11_1.c.arc(this.x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                eia11_1.c.fillStyle = this.color;
                eia11_1.c.fill();
            }
        }
        nectarBar() {
            if (this.nectarLevel < 30)
                this.nectarLevel++;
            this.draw();
            //Interval für Balken animation fehlt noch
        }
    }
    eia11_1.Flower = Flower;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=flower.js.map