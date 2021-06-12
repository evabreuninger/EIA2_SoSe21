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
    var DayNightCycle = /** @class */ (function (_super) {
        __extends(DayNightCycle, _super);
        function DayNightCycle(_size, _angle, _timeScale) {
            var _this = _super.call(this) || this;
            _this.timeScale = _timeScale;
            DayNightCycle.time = 0;
            _this.current = 0;
            DayNightCycle.total = 2 * Math.PI / _this.timeScale;
            _this.cX = eia10_2.canvas.width / 2;
            _this.cY = eia10_2.canvas.height / 3;
            _this.rX = eia10_2.canvas.width * 0.4;
            _this.rY = eia10_2.canvas.height * 0.28;
            _this.size = _size;
            _this.angle = _angle;
            _this.timeScale = _timeScale;
            return _this;
        }
        DayNightCycle.nightAtmosphere = function () {
            eia10_2.c.beginPath();
            eia10_2.c.fillStyle = "rgba(39, 33, 78, 0.5)";
            eia10_2.c.fillRect(0, 0, eia10_2.canvas.width, eia10_2.canvas.height);
        };
        DayNightCycle.isNight = function () {
            return this.time % (DayNightCycle.total) > (DayNightCycle.total) / 2.1;
        };
        DayNightCycle.prototype.update = function () {
            this.angle += this.timeScale;
            this.draw();
            DayNightCycle.time++;
            this.current = DayNightCycle.time % (DayNightCycle.total);
        };
        DayNightCycle.prototype.draw = function () {
            this.sky();
            this.sun();
            this.moon();
        };
        DayNightCycle.prototype.sun = function () {
            eia10_2.c.beginPath();
            var x = this.cX + this.rX * Math.cos(this.angle);
            var y = this.cY + this.rY * Math.sin(this.angle);
            var gradient = eia10_2.c.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            eia10_2.c.fillStyle = gradient;
            eia10_2.c.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        };
        DayNightCycle.prototype.moon = function () {
            eia10_2.c.beginPath();
            var x = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            var y = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            var gradient = eia10_2.c.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            eia10_2.c.arc(x, y, this.size, 0, 2 * Math.PI);
            eia10_2.c.fillStyle = gradient;
            eia10_2.c.fill();
        };
        DayNightCycle.prototype.sky = function () {
            eia10_2.c.beginPath();
            eia10_2.c.rect(0, 0, eia10_2.canvas.width, eia10_2.canvas.height);
            if (this.current > 0 && this.current < DayNightCycle.total * 0.02)
                eia10_2.c.fillStyle = this.colorFade(39, 33, 78, 255, 107, 62, DayNightCycle.time % DayNightCycle.total, DayNightCycle.total * 0.02);
            if (this.current > DayNightCycle.total * 0.02 && this.current < DayNightCycle.total * 0.6)
                eia10_2.c.fillStyle = this.colorFade(255, 107, 62, 181, 214, 224, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.02), DayNightCycle.total * 0.04);
            if (this.current > DayNightCycle.total * 0.06 && this.current < DayNightCycle.total * 0.44)
                eia10_2.c.fillStyle = "rgb(181, 214, 224)";
            if (this.current > DayNightCycle.total * 0.44 && this.current < DayNightCycle.total * 0.47)
                eia10_2.c.fillStyle = this.colorFade(181, 214, 224, 255, 107, 62, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.44), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.47 && this.current < DayNightCycle.total * 0.5)
                eia10_2.c.fillStyle = this.colorFade(255, 107, 62, 39, 33, 78, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.47), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.5 && this.current < DayNightCycle.total * 1)
                eia10_2.c.fillStyle = "rgb(39,33,78)";
            eia10_2.c.fill();
        };
        DayNightCycle.prototype.colorFade = function (rS, gS, bS, rE, gE, bE, i, steps) {
            var r = rS + ((rE - rS) / steps) * i;
            var g = gS + ((gE - gS) / steps) * i;
            var b = bS + ((bE - bS) / steps) * i;
            return "rgb(" + r + ", " + g + ", " + b + ")";
        };
        return DayNightCycle;
    }(eia10_2.Animated));
    eia10_2.DayNightCycle = DayNightCycle;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=dayNightCycle.js.map