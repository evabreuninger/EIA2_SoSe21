namespace eia11_1 {
    export class Tree extends Landscape {
        valuesX: number[];
        valuesY: number[];
        colors: string[];

        constructor(x: number, y: number) {
            super(x, y, -150 - Math.random() * 100);
            this.makeColors();
            this.makeValues();
        }

        draw(): void {
            c.beginPath();
            c.fillStyle = "rgb(83, 49, 24)";
            c.fillRect(this.x, this.y, 40, this.height);

            for (let i: number = 0; i < 10; i++) {
                c.beginPath();
                c.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                c.fillStyle = this.colors[i];
                c.fill();
            }
        }
        makeValues(): void {
            this.valuesX = [];
            this.valuesY = [];
            for (let i: number = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        }

        makeColors(): void {
            this.colors = [];
            for (let i: number = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        }
    }
}