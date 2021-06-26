"use strict";
var eia11_1;
(function (eia11_1) {
    class Bee extends eia11_1.AnimationType1 {
        constructor(x, y) {
            super(x, y, Math.random() * 8 - 4, Math.random() * 8 - 4);
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
            this.state = eia11_1.BeeState.FLY;
        }
        update() {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.draw();
        }
        draw() {
            eia11_1.c.beginPath();
            eia11_1.c.ellipse(this.x, this.y, this.scale, this.scale * 0.7, (this.vX > 0) ? -Math.PI / 10 : Math.PI / 10, 0, 2 * Math.PI);
            eia11_1.c.fillStyle = "yellow";
            eia11_1.c.lineWidth = 5;
            eia11_1.c.strokeStyle = "black";
            eia11_1.c.stroke();
            eia11_1.c.fill();
            eia11_1.c.beginPath();
            eia11_1.c.arc((this.vX > 0) ? this.x + this.scale / 3 : this.x - this.scale / 3, this.y - this.scale / 6, this.scale / 5, 0, Math.PI * 2);
            eia11_1.c.fillStyle = "black";
            eia11_1.c.fill();
            eia11_1.c.beginPath();
            if (this.time % 4 < 2) {
                eia11_1.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : -Math.PI / 8, 0, Math.PI * 2);
            }
            else {
                eia11_1.c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            eia11_1.c.fillStyle = "rgba(180,180,180, 0.7)";
            eia11_1.c.fill();
            eia11_1.c.lineWidth = 2;
            eia11_1.c.strokeStyle = "rgb(100,100,100)";
            eia11_1.c.stroke();
        }
        setRandomVelocity() {
            this.vX = Math.random() * 8 - 4;
            this.vY = Math.random() * 8 - 4;
        }
        setTargetVelocity() {
            if (!this.target)
                return;
            this.vX = Math.max(Math.min((this.target.x - this.x) / 50, 5), -5);
            this.vY = Math.max(Math.min((this.target.y - this.y) / 50, 5), -5);
        }
        areWeThereYet() {
            if (this.target) {
                let distance = Math.sqrt(Math.pow(this.target.x - this.x, 2) + Math.pow(this.target.y - this.y, 2));
                return distance < 2;
            }
            return false;
        }
        resetStateTime() {
            this.changeTime = Math.random() * 50 + 40;
            this.time = 0;
        }
        updateVelocities() {
            // Update navigation stuff more often to better track if we're at the target
            if (this.time >= 10) {
                switch (this.state) {
                    case eia11_1.BeeState.NAVIGATE:
                        if (this.areWeThereYet()) {
                            this.state = eia11_1.BeeState.SUCC;
                            this.resetStateTime();
                        }
                        this.setTargetVelocity();
                        break;
                    case eia11_1.BeeState.RETURN:
                        if (this.areWeThereYet()) {
                            this.state = eia11_1.BeeState.PUKE;
                            this.resetStateTime();
                        }
                        this.setTargetVelocity();
                        break;
                }
            }
            if (this.time >= this.changeTime) {
                switch (this.state) {
                    case eia11_1.BeeState.FLY:
                        this.setRandomVelocity();
                        // find a new flower
                        if (!this.target && Math.random() > 0.5) {
                            this.target = eia11_1.scene.findJuicyFlower(this);
                            this.state = eia11_1.BeeState.NAVIGATE;
                        }
                        break;
                    case eia11_1.BeeState.SUCC:
                        let flower = this.target;
                        flower.nectarLevel = Math.max(0, flower.nectarLevel - 30);
                        // back to beehive
                        this.target = eia11_1.scene.beeHive;
                        this.state = eia11_1.BeeState.RETURN;
                        break;
                    case eia11_1.BeeState.PUKE:
                        // just wait i guess
                        this.state = eia11_1.BeeState.FLY;
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
    eia11_1.Bee = Bee;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=bee.js.map