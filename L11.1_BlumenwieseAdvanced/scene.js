"use strict";
var eia11_1;
(function (eia11_1) {
    class Scene {
        mountain;
        mountain2;
        animated;
        flowers;
        trees;
        timeScale;
        constructor(_timeScale) {
            this.animated = [new eia11_1.DayNightCycle(70, Math.PI, _timeScale)];
            this.mountain = new eia11_1.Mountain(0, 150, eia11_1.canvas.width, 300);
            this.mountain2 = new eia11_1.Mountain(0, 300, eia11_1.canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeClouds();
            this.makeBees();
        }
        update() {
            this.animated[0].update();
            this.grass();
            this.mountain.draw();
            this.mountain2.draw();
            for (let flower of this.flowers) {
                flower.draw();
            }
            for (let i = 1; i < this.flowers.length; i++) {
                this.flowers[i].nectarBar();
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
                this.animated.push(new eia11_1.Bee(Math.random() * eia11_1.canvas.width, Math.random() * 800 + 300));
            }
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
                this.flowers.push(new eia11_1.Flower(Math.random() * eia11_1.canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
            }
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