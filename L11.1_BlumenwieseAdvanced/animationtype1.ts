namespace eia10_2 {
    export class AnimationType1 extends Animated {
        x: number;
        y: number;
        vX: number;
        vY: number;

        constructor(x: number, y: number, vX: number, vY: number) {
            super();
            this.x = x;
            this.y = y;
            this.vX = vX;
            this.vY = vY;
        }
    }
}