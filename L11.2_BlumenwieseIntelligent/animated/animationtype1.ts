namespace eia11_1 {
    export abstract class AnimationType1 extends Animated {
        x: number;
        y: number;
        vX: number;
        vY: number;

        protected constructor(x: number, y: number, vX: number, vY: number) {
            super();
            this.x = x;
            this.y = y;
            this.vX = vX;
            this.vY = vY;
        }
    }
}
