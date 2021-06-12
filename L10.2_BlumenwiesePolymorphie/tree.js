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
    var Tree = /** @class */ (function (_super) {
        __extends(Tree, _super);
        function Tree(x, y) {
            var _this = _super.call(this, x, y, -150 - Math.random() * 100) || this;
            _this.makeColors();
            _this.makeValues();
            return _this;
        }
        Tree.prototype.draw = function () {
            eia10_2.c.beginPath();
            eia10_2.c.fillStyle = "rgb(83, 49, 24)";
            eia10_2.c.fillRect(this.x, this.y, 40, this.height);
            for (var i = 0; i < 10; i++) {
                eia10_2.c.beginPath();
                eia10_2.c.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                eia10_2.c.fillStyle = this.colors[i];
                eia10_2.c.fill();
            }
        };
        Tree.prototype.makeValues = function () {
            this.valuesX = [];
            this.valuesY = [];
            for (var i = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        };
        Tree.prototype.makeColors = function () {
            this.colors = [];
            for (var i = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        };
        return Tree;
    }(eia10_2.Landscape));
    eia10_2.Tree = Tree;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=tree.js.map