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
    var AnimationType1 = /** @class */ (function (_super) {
        __extends(AnimationType1, _super);
        function AnimationType1(x, y, vX, vY) {
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.vX = vX;
            _this.vY = vY;
            return _this;
        }
        return AnimationType1;
    }(eia10_2.Animated));
    eia10_2.AnimationType1 = AnimationType1;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=animationtype1.js.map