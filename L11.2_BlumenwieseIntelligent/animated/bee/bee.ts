namespace eia11_1 {
    export class Bee extends AnimationType1 {
        time: number;
        changeTime: number;
        scale: number;
        state: BeeState;
        target?: Landscape;

        constructor(x: number, y: number) {
            super(x, y, Math.random() * 8 - 4, Math.random() * 8 - 4);
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
            this.state = BeeState.FLY;
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
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : -Math.PI / 8, 0, Math.PI * 2);
            } else {
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            c.fillStyle = "rgba(180,180,180, 0.7)";
            c.fill();
            c.lineWidth = 2;
            c.strokeStyle = "rgb(100,100,100)";
            c.stroke();
        }

        setRandomVelocity(): void {
            this.vX = Math.random() * 8 - 4;
            this.vY = Math.random() * 8 - 4;
        }

        setTargetVelocity(): void {
            if (!this.target) return;
            this.vX = Math.max(Math.min((this.target.x - this.x) / 50, 5),-5);
            this.vY = Math.max(Math.min((this.target.y - this.y) / 50, 5),-5);
        }

        areWeThereYet(): boolean {
            if (this.target) {
                let distance = Math.sqrt(Math.pow(this.target.x - this.x, 2) + Math.pow(this.target.y - this.y, 2));
                return distance < 2;
            }
            return false;
        }

        resetStateTime(): void {
            this.changeTime = Math.random() * 50 + 40;
            this.time = 0;
        }

        updateVelocities(): void {
            // Update navigation stuff more often to better track if we're at the target
            if (this.time >= 10) {
                switch (this.state) {
                    case BeeState.NAVIGATE:
                        if (this.areWeThereYet()) {
                            this.state = BeeState.SUCC;
                            this.resetStateTime();
                        }
                        this.setTargetVelocity();
                        break;
                    case BeeState.RETURN:
                        if (this.areWeThereYet()) {
                            this.state = BeeState.PUKE;
                            this.resetStateTime();
                        }
                        this.setTargetVelocity();
                        break;
                }
            }

            if (this.time >= this.changeTime) {
                switch (this.state) {
                    case BeeState.FLY:
                        this.setRandomVelocity();
                        // find a new flower
                        if (!this.target && Math.random()>0.5) {
                            this.target = scene.findJuicyFlower(this);
                            this.state = BeeState.NAVIGATE;
                        }
                        break;
                    case BeeState.SUCC:
                        let flower = (this.target as Flower);
                        flower.nectarLevel = Math.max(0, flower.nectarLevel - 30);
                        // back to beehive
                        this.target = scene.beeHive;
                        this.state = BeeState.RETURN;
                        break;
                    case BeeState.PUKE:
                        // just wait i guess
                        this.state = BeeState.FLY;
                        this.target = undefined;
                        break;
                }

                this.resetStateTime();
            }

            if (this.x >= window.innerWidth - this.scale) {
                this.vX = -this.vX;
                this.x = window.innerWidth - this.scale;
            }
            if (this.x <= this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }

            if (this.y >= window.innerHeight - this.scale) {
                this.vY = -this.vY;
                this.y = window.innerHeight - this.scale;
            }
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }

        }
    }
}
