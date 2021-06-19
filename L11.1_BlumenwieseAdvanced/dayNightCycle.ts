namespace eia11_1 {
    export class DayNightCycle extends Animated {
        static time: number;
        static total: number;
        cX: number;
        cY: number;
        rX: number;
        rY: number;
        size: number;
        angle: number;
        timeScale: number; 
        current: number;

        constructor(_size: number, _angle: number, _timeScale: number) {
            super();
            this.timeScale = _timeScale;
            DayNightCycle.time = 0;
            this.current = 0;
            DayNightCycle.total = 2 * Math.PI / this.timeScale;
            this.cX = canvas.width / 2;
            this.cY = canvas.height / 3;
            this.rX = canvas.width * 0.4;
            this.rY = canvas.height * 0.28;
            this.size = _size;
            this.angle = _angle;
            this.timeScale = _timeScale;
        }

        static nightAtmosphere(): void {
            c.beginPath();
            c.fillStyle = "rgba(39, 33, 78, 0.5)";
            c.fillRect(0, 0, canvas.width, canvas.height);
        }

        static isNight(): boolean {
            return this.time % (DayNightCycle.total) > (DayNightCycle.total) / 2.1;
        }

        update(): void {
            this.angle += this.timeScale;
            this.draw();
            DayNightCycle.time++;
            this.current = DayNightCycle.time % (DayNightCycle.total);
        }

        draw(): void {
            this.sky();
            this.sun();
            this.moon();
        }

        sun(): void {
            c.beginPath();
            let x: number = this.cX + this.rX * Math.cos(this.angle);
            let y: number = this.cY + this.rY * Math.sin(this.angle);
            let gradient: CanvasGradient = c.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            c.fillStyle = gradient;
            c.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        }

        moon(): void {
            c.beginPath();
            let x: number = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            let y: number = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            let gradient: CanvasGradient = c.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            c.arc(x, y, this.size, 0, 2 * Math.PI);
            c.fillStyle = gradient;
            c.fill();
        }

        sky(): void {
            c.beginPath();
            c.rect(0, 0, canvas.width, canvas.height); 
            if (this.current > 0 && this.current < DayNightCycle.total * 0.02)c.fillStyle = this.colorFade(39, 33, 78, 255, 107, 62, DayNightCycle.time % DayNightCycle.total, DayNightCycle.total * 0.02);
            if (this.current > DayNightCycle.total * 0.02 && this.current < DayNightCycle.total * 0.6) c.fillStyle = this.colorFade(255, 107, 62, 181, 214, 224, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.02), DayNightCycle.total * 0.04);
            if (this.current > DayNightCycle.total * 0.06 && this.current < DayNightCycle.total * 0.44) c.fillStyle = "rgb(181, 214, 224)";
            if (this.current > DayNightCycle.total * 0.44 && this.current < DayNightCycle.total * 0.47) c.fillStyle = this.colorFade(181, 214, 224, 255, 107, 62, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.44), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.47 && this.current < DayNightCycle.total * 0.5) c.fillStyle = this.colorFade(255, 107, 62, 39, 33, 78, DayNightCycle.time % DayNightCycle.total - (DayNightCycle.total * 0.47), DayNightCycle.total * 0.03);
            if (this.current > DayNightCycle.total * 0.5 && this.current < DayNightCycle.total * 1) c.fillStyle = "rgb(39,33,78)";  
            c.fill();
        }

        private colorFade(rS: number, gS: number, bS: number, rE: number, gE: number, bE: number, i: number, steps: number): string {
            let r: number = rS + ((rE - rS) / steps) * i;
            let g: number = gS + ((gE - gS) / steps) * i;
            let b: number = bS + ((bE - bS) / steps) * i; 
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
}