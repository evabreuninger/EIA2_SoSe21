namespace eia11_1 {
    export class BeeHive extends Landscape {

        constructor(x: number, y: number, height: number) {
            super(x, y, height);
        }

        draw(): void {

            c.save();
            c.translate(this.x, this.y);

            // colors
            c.fillStyle = "#FFB90F";
            c.strokeStyle = "#996633";
            c.lineWidth = 4;

            // top bit
            c.beginPath();
            c.moveTo(0, 0);
            c.arc(-18, 0, 10, 0, 2 * Math.PI);
            c.arc(18, 0, 10, 0, 2 * Math.PI);
            c.rect(-18, -10, 36, 20);
            c.stroke();
            c.fill();

            // 2nd
            c.translate(0, 20);
            c.beginPath();
            c.arc(-25, 0, 10, 0, 2 * Math.PI);
            c.arc(25, 0, 10, 0, 2 * Math.PI);
            c.rect(-25, -10, 50, 20);
            c.stroke();
            c.fill();

            // 3rd
            c.translate(0, 20);
            c.beginPath();
            c.arc(-30, 0, 10, 0, 2 * Math.PI);
            c.arc(30, 0, 10, 0, 2 * Math.PI);
            c.rect(-30, -10, 60, 20);
            c.stroke();
            c.fill();

            // 4th
            c.translate(0, 20);
            c.beginPath();
            c.arc(-30, 0, 10, 0, 2 * Math.PI);
            c.arc(30, 0, 10, 0, 2 * Math.PI);
            c.rect(-30, -10, 60, 20);
            c.stroke();
            c.fill();

            // entrance hole
            c.beginPath();
            c.fillStyle = "#663300";
            c.arc(0, 0, 8, 0, 2 * Math.PI);
            c.fill();

            c.restore();
        }

    }
}
