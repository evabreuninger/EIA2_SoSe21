"use strict";
var eia11_1;
(function (eia11_1) {
    class DayNightCycle extends eia11_1.Animated {
        constructor(_size, _angle, _timeScale) {
            super();
            this.timeScale = _timeScale;
            DayNightCycle.time = 0;
            this.current = 0;
            DayNightCycle.total = 2 * Math.PI / this.timeScale;
            this.cX = eia11_1.canvas.width / 2;
            this.cY = eia11_1.canvas.height / 3;
            this.rX = eia11_1.canvas.width * 0.4;
            this.rY = eia11_1.canvas.height * 0.28;
            this.size = _size;
            this.angle = _angle;
            this.timeScale = _timeScale;
        }
        static nightAtmosphere() {
            eia11_1.c.beginPath();
            eia11_1.c.fillStyle = "rgba(39, 33, 78, 0.5)";
            eia11_1.c.fillRect(0, 0, eia11_1.canvas.width, eia11_1.canvas.height);
        }
        static isNight() {
            return this.time % (DayNightCycle.total) > (DayNightCycle.total) / 2.1;
        }
        update() {
            this.angle += this.timeScale;
            this.draw();
            DayNightCycle.time++;
            this.current = DayNightCycle.time % (DayNightCycle.total);
        }
        draw() {
            this.sky();
            this.sun();
            this.moon();
        }
        sun() {
            eia11_1.c.beginPath();
            let x = this.cX + this.rX * Math.cos(this.angle);
            let y = this.cY + this.rY * Math.sin(this.angle);
            let gradient = eia11_1.c.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            eia11_1.c.fillStyle = gradient;
            eia11_1.c.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        }
        moon() {
            eia11_1.c.beginPath();
            let x = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            let y = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            let gradient = eia11_1.c.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            eia11_1.c.arc(x, y, this.size, 0, 2 * Math.PI);
            eia11_1.c.fillStyle = gradient;
            eia11_1.c.fill();
        }
        sky() {
            eia11_1.c.beginPath();
            eia11_1.c.rect(0, 0, eia11_1.canvas.width, eia11_1.canvas.height);
            if (this.current > 0 && this.current < DayNightCycle.total * 0.02)
                eia11_1.c.fillStyle = this.colorFade(39, 33, 78, 255, 107, 62, DayNightCycle.time % DayNightCycle.total, DayNightCycle.total * 0.02);
            if (this.current > DayNightCycle.total * 0.02 && this.current < DayNightCycle.total * 0.6)
                eia11_1.c.fillStyle = this.colorFade(255, 107, 62, 181, 214, 224, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.02), DayNightCycle.total * 0.04);
            if (this.current > DayNightCycle.total * 0.06 && this.current < DayNightCycle.total * 0.44)
                eia11_1.c.fillStyle = "rgb(181, 214, 224)";
            if (this.current > DayNightCycle.total * 0.44 && this.current < DayNightCycle.total * 0.47)
                eia11_1.c.fillStyle = this.colorFade(181, 214, 224, 255, 107, 62, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.44), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.47 && this.current < DayNightCycle.total * 0.5)
                eia11_1.c.fillStyle = this.colorFade(255, 107, 62, 39, 33, 78, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.47), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.5 && this.current < DayNightCycle.total * 1)
                eia11_1.c.fillStyle = "rgb(39,33,78)";
            eia11_1.c.fill();
        }
        colorFade(rS, gS, bS, rE, gE, bE, i, steps) {
            let r = rS + ((rE - rS) / steps) * i;
            let g = gS + ((gE - gS) / steps) * i;
            let b = bS + ((bE - bS) / steps) * i;
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
    eia11_1.DayNightCycle = DayNightCycle;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=dayNightCycle.js.map