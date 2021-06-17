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
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee(x, y) {
            var _this = _super.call(this, x, y, Math.random() * 8 - 4, Math.random() * 8 - 4) || this;
            _this.time = 0;
            _this.changeTime = Math.random() * 50 + 40;
            _this.scale = Math.random() * 20 + 10;
            return _this;
        }
        Bee.prototype.update = function () {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.draw();
        };
        Bee.prototype.draw = function () {
            eia10_2.c.beginPath();
            eia10_2.c.ellipse(this.x, this.y, this.scale, this.scale * 0.7, (this.vX > 0) ? -Math.PI / 10 : Math.PI / 10, 0, 2 * Math.PI);
            eia10_2.c.fillStyle = "yellow";
            eia10_2.c.lineWidth = 5;
            eia10_2.c.strokeStyle = "black";
            eia10_2.c.stroke();
            eia10_2.c.fill();
            eia10_2.c.beginPath();
            eia10_2.c.arc((this.vX > 0) ? this.x + this.scale / 3 : this.x - this.scale / 3, this.y - this.scale / 6, this.scale / 5, 0, Math.PI * 2);
            eia10_2.c.fillStyle = "black";
            eia10_2.c.fill();
            eia10_2.c.beginPath();
            if (this.time % 4 < 2) {
                eia10_2.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : -Math.PI / 8, 0, Math.PI * 2);
            }
            else {
                eia10_2.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            eia10_2.c.fillStyle = "rgba(180,180,180, 0.7)";
            eia10_2.c.fill();
            eia10_2.c.lineWidth = 2;
            eia10_2.c.strokeStyle = "rgb(100,100,100)";
            eia10_2.c.stroke();
        };
        Bee.prototype.updateVelocities = function () {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }
            if (this.x >= eia10_2.canvas.width - this.scale) {
                this.vX = -this.vX;
                this.x = eia10_2.canvas.width - this.scale;
            }
            if (this.x <= 0 + this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }
            if (this.y >= eia10_2.canvas.height - this.scale) {
                this.vY = -this.vY;
                this.y = eia10_2.canvas.height - this.scale;
            }
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }
        };
        return Bee;
    }(eia10_2.AnimationType1));
    eia10_2.Bee = Bee;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=bee.js.map