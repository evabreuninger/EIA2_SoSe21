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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(x, y) {
            var _this = _super.call(this, x, y, Math.random() * 1 + 1, 0) || this;
            _this.sizeX = 150;
            return _this;
        }
        Cloud.prototype.update = function () {
            this.x += this.vX;
            if (this.x > eia10_2.canvas.width + this.sizeX)
                this.x = 0 - this.sizeX;
            this.draw();
        };
        Cloud.prototype.draw = function () {
            eia10_2.c.beginPath();
            eia10_2.c.save();
            eia10_2.c.scale(1.5, 1.5);
            eia10_2.c.arc(this.x, this.y, 25, 0, Math.PI * 2);
            eia10_2.c.arc(this.x + 25, this.y - 10, 25, 0, Math.PI * 2);
            eia10_2.c.arc(this.x + 60, this.y, 20, 0, Math.PI * 2);
            eia10_2.c.arc(this.x + 25, this.y, 25, 0, Math.PI * 2);
            eia10_2.c.arc(this.x + 45, this.y, 20, 0, Math.PI * 2);
            eia10_2.c.fillStyle = "rgba(255,255,255,0.7)";
            eia10_2.c.fill();
            eia10_2.c.restore();
        };
        return Cloud;
    }(eia10_2.AnimationType1));
    eia10_2.Cloud = Cloud;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=cloud.js.map