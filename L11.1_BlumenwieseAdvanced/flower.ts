namespace eia11_1 {
    export class Flower extends Landscape {
        type: number;
        scale: number;
        color: string;
        nectarLevel: number;
        maxLevel: number;

        constructor(x: number, y: number, height: number) {
            super(x, y, height);
            this.type = Math.round(Math.random() + 1);
            this.scale = Math.random() * 4 + 10;
            this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            this.nectarLevel = Math.random() * 5;
            this.maxLevel = this.maxLevel;
        }

        draw(): void {
            switch (this.type) {
                case 1: this.flowerType1();
                        break;
                case 2: this.flowerType2();
                        break;
            }
        }

        flowerType1(): void {
            c.beginPath();
            c.fillStyle = "rgb(0, 150, 0)";
            c.fillRect(this.x, this.y, 6, - this.height);

            //Nektar-Balken
            c.beginPath();
            c.fillStyle = "rgb(0, 0, 0)";
            c.fillRect(this.x + 10, this.y, 6, - this.nectarLevel);
            c.closePath();

            c.beginPath();
            let gradient: CanvasGradient = c.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            c.fillStyle = gradient;
            c.fillRect(0, 0, canvas.width, canvas.height);
        }

        flowerType2(): void {
            c.beginPath();
            c.fillStyle = "rgb(0,150,0)";
            c.fillRect(this.x, this.y, 6, - this.height);

            //Nektar-Balken
            c.beginPath();
            c.fillStyle = "rgb(0, 0, 0)";
            c.fillRect(this.x + 10, this.y, 6, - this.nectarLevel);
            c.closePath();

            c.beginPath();
            c.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            c.fillStyle = "yellow";
            c.fill();
            for (let i: number = 1; i <= 8; i++) {
                c.beginPath();
                c.arc(this. x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                c.fillStyle = this.color;
                c.fill();
            }  
        }

        nectarBar(): void {
            if (this.nectarLevel < 50)
                this.nectarLevel += this.maxLevel;
            this.draw();
        }
    }
}