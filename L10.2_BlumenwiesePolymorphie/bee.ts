namespace eia10_2 {
    export class Bee extends AnimationType1 {
        time: number;
        changeTime: number;
        scale: number;

        constructor(x: number, y: number) {
            super(x, y, Math.random() * 8 - 4, Math.random() * 8 - 4);
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
        }

        update(): void {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.draw();
        }

        draw(): void {
            c.beginPath();
            c.ellipse(this.x, this.y, this.scale, this.scale * 0.7, (this.vX > 0) ? -Math.PI / 10 : Math.PI / 10, 0, 2 * Math.PI);
            c.fillStyle = "yellow";
            c.lineWidth = 5;
            c.strokeStyle = "black";
            c.stroke();
            c.fill();
            c.beginPath();
            c.arc((this.vX > 0) ? this.x + this.scale / 3 : this.x - this.scale / 3, this.y - this.scale / 6, this.scale / 5, 0, Math.PI * 2);
            c.fillStyle = "black";
            c.fill();
            c.beginPath();
            if (this.time % 4 < 2) {
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : - Math.PI / 8, 0, Math.PI * 2);
            }
            else {
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            c.fillStyle = "rgba(180,180,180, 0.7)";
            c.fill();
            c.lineWidth = 2;
            c.strokeStyle = "rgb(100,100,100)";
            c.stroke();   
        }

        updateVelocities(): void {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }

            if (this.x >= canvas.width - this.scale) {
                this.vX  = -this.vX;
                this.x = canvas.width - this.scale;
            }
            if (this.x <= 0 + this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }

            if (this.y >= canvas.height - this.scale) {
                this.vY = -this.vY;
                this.y = canvas.height - this.scale;
            }   
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }
           
        }
    }
}