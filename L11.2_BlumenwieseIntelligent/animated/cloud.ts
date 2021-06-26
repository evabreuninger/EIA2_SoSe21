namespace eia11_1 {
    export class Cloud extends AnimationType1 {
        sizeX: number;

        constructor(x: number, y: number) {
            super(x, y, Math.random() * 1 + 1, 0);
            this.sizeX = 150;
        }

        update(): void {
            this.x += this.vX;
            if (this.x > canvas.width + this.sizeX) this.x = 0 - this.sizeX;
            this.draw();
        }

        draw(): void {
            c.beginPath();
            c.save();
            c.scale(1.5, 1.5);
            c.arc(this.x, this.y, 25, 0, Math.PI * 2);
            c.arc(this.x + 25, this.y - 10, 25, 0, Math.PI * 2);
            c.arc(this.x + 60, this.y, 20, 0, Math.PI * 2);
            c.arc(this.x + 25, this.y, 25, 0, Math.PI * 2);
            c.arc(this.x + 45, this.y, 20, 0, Math.PI * 2);
            c.fillStyle = "rgba(255,255,255,0.7)";
            c.fill();
            c.restore();
        }
    }
}