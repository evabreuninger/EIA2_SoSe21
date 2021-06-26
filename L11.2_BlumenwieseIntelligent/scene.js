"use strict";
var eia11_1;
(function (eia11_1) {
    class Scene {
        constructor(_timeScale) {
            this.animated = [new eia11_1.DayNightCycle(70, Math.PI, _timeScale)];
            this.mountain = new eia11_1.Mountain(0, 150, eia11_1.canvas.width, 300);
            this.mountain2 = new eia11_1.Mountain(0, 300, eia11_1.canvas.width, 150);
            this.beeHive = new eia11_1.BeeHive(0.5 * eia11_1.canvas.width, 0.5 * eia11_1.canvas.height, 100);
            this.makeTrees();
            this.makeFlowers();
            this.makeClouds();
            setTimeout(() => {
                this.makeBees();
            }, 2000);
        }
        update() {
            this.animated[0].update();
            this.grass();
            this.mountain.draw();
            this.mountain2.draw();
            this.beeHive.draw();
            for (let flower of this.flowers) {
                flower.nectarBar();
                flower.draw();
            }
            for (let tree of this.trees) {
                tree.draw();
            }
            for (let i = 1; i < this.animated.length; i++) {
                this.animated[i].update();
            }
            if (eia11_1.DayNightCycle.isNight())
                eia11_1.DayNightCycle.nightAtmosphere();
        }
        makeClouds() {
            for (let i = 0; i < 5; i++) {
                this.animated.push(new eia11_1.Cloud(Math.random() * eia11_1.canvas.width, Math.random() * 100 + 50));
            }
        }
        makeBees() {
            for (let i = 0; i < 6; i++) {
                this.makeBee(this.beeHive.x, this.beeHive.y);
            }
        }
        makeBee(x, y) {
            this.animated.push(new eia11_1.Bee(x, y));
        }
        makeTrees() {
            this.trees = [];
            for (let i = 0; i < 12; i++) {
                this.trees.push(new eia11_1.Tree(Math.random() * eia11_1.canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        }
        makeFlowers() {
            this.flowers = [];
            for (let i = 0; i < 200; i++) {
                this.flowers.push(new eia11_1.Flower(100 + (Math.random() * 1700), (Math.random() * 450 + 460), Math.random() * 15 + 30));
            }
        }
        findJuicyFlower(bee) {
            let best = this.flowers[Math.floor(Math.random() * this.flowers.length)]; // start with a random one
            console.log(best);
            let bestLevel = best.nectarLevel;
            for (let flower of this.flowers) {
                if (flower.y < 30 || flower.y > window.innerHeight - 50)
                    continue;
                if (flower.x < 30 || flower.x > window.innerWidth - 50)
                    continue;
                // look for the closest
                let distance = Math.sqrt(Math.pow(flower.x - bee.x, 2) + Math.pow(flower.y - bee.y, 2));
                if (distance > 200)
                    continue;
                // check if it's better than our current selection
                if (flower.nectarLevel >= bestLevel) {
                    if (Math.random() > 0.5) { // 50/50 if we take it or not
                        best = flower;
                        bestLevel = flower.nectarLevel;
                    }
                }
            }
            return best;
        }
        sortTrees(trees) {
            let temp = [];
            for (let i = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function (a, b) {
                return a - b;
            });
            for (let i = 0; i < trees.length; i++) {
                trees[i].y = temp[i];
            }
        }
        grass() {
            eia11_1.c.beginPath();
            eia11_1.c.rect(0, 450, eia11_1.canvas.width, eia11_1.canvas.height);
            let gradient = eia11_1.c.createLinearGradient(0, 450, 0, eia11_1.canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            eia11_1.c.fillStyle = gradient;
            eia11_1.c.fill();
        }
    }
    eia11_1.Scene = Scene;
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=scene.js.map