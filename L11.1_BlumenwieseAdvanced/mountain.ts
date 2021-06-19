namespace eia11_1 {
    export class Mountain extends Landscape {
        width: number;
        pointAmount: number;
        points: number[][] = [];

        constructor(x: number, y: number, width: number, height: number) {
            super(x, y, height);
            this.width = width;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            for (let i: number = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.width / this.pointAmount) + (this.x + (this.width / this.pointAmount) * i), Math.random() * this.height / 1.25 + this.y]);
            }
        }

        draw(): void {
            c.beginPath();
            c.moveTo(this.x, this.y + this.height);
            c.lineTo(this.x, this.y + this.height / 2);
            for (let i: number = 0; i < this.pointAmount; i++) {
                c.lineTo(this.points[i][0], this.points[i][1]);
            }
            c.lineTo(this.x + this.width, this.y + this.height / 2);
            c.lineTo(this.x + this.width, this.y + this.height);
            let gradient: CanvasGradient = c.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            c.fillStyle = gradient;
            c.fill();
        }
    }
}