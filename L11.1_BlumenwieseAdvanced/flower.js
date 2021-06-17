var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var eia10_2;
(function (eia10_2) {
    var Flower = /** @class */ (function (_super) {
        __extends(Flower, _super);
        function Flower(x, y, height) {
            var _this = _super.call(this, x, y, height) || this;
            _this.type = Math.round(Math.random() + 1);
            _this.scale = Math.random() * 4 + 10;
            _this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            return _this;
        }
        Flower.prototype.draw = function () {
            switch (this.type) {
                case 1:
                    this.flowerType1();
                    break;
                case 2:
                    this.flowerType2();
                    break;
            }
        };
        Flower.prototype.flowerType1 = function () {
            eia10_2.c.beginPath();
            eia10_2.c.fillStyle = "rgb(0, 150, 0)";
            eia10_2.c.fillRect(this.x, this.y, 6, -this.height);
            eia10_2.c.beginPath();
            var gradient = eia10_2.c.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            eia10_2.c.fillStyle = gradient;
            eia10_2.c.fillRect(0, 0, eia10_2.canvas.width, eia10_2.canvas.height);
        };
        Flower.prototype.flowerType2 = function () {
            eia10_2.c.beginPath();
            eia10_2.c.fillStyle = "rgb(0,150,0)";
            eia10_2.c.fillRect(this.x, this.y, 6, -this.height);
            eia10_2.c.beginPath();
            eia10_2.c.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            eia10_2.c.fillStyle = "yellow";
            eia10_2.c.fill();
            for (var i = 1; i <= 8; i++) {
                eia10_2.c.beginPath();
                eia10_2.c.arc(this.x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                eia10_2.c.fillStyle = this.color;
                eia10_2.c.fill();
            }
        };
        return Flower;
    }(eia10_2.Landscape));
    eia10_2.Flower = Flower;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=flower.js.map