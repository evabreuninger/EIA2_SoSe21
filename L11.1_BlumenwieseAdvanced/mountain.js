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
    var Mountain = /** @class */ (function (_super) {
        __extends(Mountain, _super);
        function Mountain(x, y, width, height) {
            var _this = _super.call(this, x, y, height) || this;
            _this.points = [];
            _this.width = width;
            _this.pointAmount = Math.round(Math.random() * 10 + 10);
            for (var i = 0; i < _this.pointAmount; i++) {
                _this.points.push([Math.random() * (_this.width / _this.pointAmount) + (_this.x + (_this.width / _this.pointAmount) * i), Math.random() * _this.height / 1.25 + _this.y]);
            }
            return _this;
        }
        Mountain.prototype.draw = function () {
            eia10_2.c.beginPath();
            eia10_2.c.moveTo(this.x, this.y + this.height);
            eia10_2.c.lineTo(this.x, this.y + this.height / 2);
            for (var i = 0; i < this.pointAmount; i++) {
                eia10_2.c.lineTo(this.points[i][0], this.points[i][1]);
            }
            eia10_2.c.lineTo(this.x + this.width, this.y + this.height / 2);
            eia10_2.c.lineTo(this.x + this.width, this.y + this.height);
            var gradient = eia10_2.c.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            eia10_2.c.fillStyle = gradient;
            eia10_2.c.fill();
        };
        return Mountain;
    }(eia10_2.Landscape));
    eia10_2.Mountain = Mountain;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=mountain.js.map