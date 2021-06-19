"use strict";
var eia11_1;
(function (eia11_1) {
    class Tree extends eia11_1.Landscape {
        valuesX;
        valuesY;
        colors;
        constructor(x, y) {
            super(x, y, -150 - Math.random() * 100);
            this.makeColors();
            this.makeValues();
        }
        draw() {
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "rgb(83, 49, 24)";
            eia11_1.c.fillRect(this.x, this.y, 40, this.height);
            for (let i = 0; i < 10; i++) {
                eia11_1.c.beginPath();
                eia11_1.c.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                eia11_1.c.fillStyle = this.colors[i];
                eia11_1.c.fill();
            }
        }
        makeValues() {
            this.valuesX = [];
            this.valuesY = [];
            for (let i = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        }
        makeColors() {
            this.colors = [];
            for (let i = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        }
    }
    eia11_1.Tree = Tree;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=tree.js.map