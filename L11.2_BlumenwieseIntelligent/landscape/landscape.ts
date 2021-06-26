namespace eia11_1 {
    export abstract class Landscape {
        x: number;
        y: number;
        height: number;

        protected constructor(x: number, y: number, height: number) {
            this.x = x;
            this.y = y;
            this.height = height;
        }

        draw(): void {}
    }
}
