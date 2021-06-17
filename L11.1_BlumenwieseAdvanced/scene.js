var eia10_2;
(function (eia10_2) {
    var Scene = /** @class */ (function () {
        function Scene(_timeScale) {
            this.animated = [new eia10_2.DayNightCycle(70, Math.PI, _timeScale)];
            this.mountain = new eia10_2.Mountain(0, 150, eia10_2.canvas.width, 300);
            this.mountain2 = new eia10_2.Mountain(0, 300, eia10_2.canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeClouds();
            this.makeBees();
        }
        Scene.prototype.update = function () {
            this.animated[0].update();
            this.grass();
            this.mountain.draw();
            this.mountain2.draw();
            for (var _i = 0, _a = this.flowers; _i < _a.length; _i++) {
                var flower = _a[_i];
                flower.draw();
            }
            for (var _b = 0, _c = this.trees; _b < _c.length; _b++) {
                var tree = _c[_b];
                tree.draw();
            }
            for (var i = 1; i < this.animated.length; i++) {
                this.animated[i].update();
            }
            if (eia10_2.DayNightCycle.isNight())
                eia10_2.DayNightCycle.nightAtmosphere();
        };
        Scene.prototype.makeClouds = function () {
            for (var i = 0; i < 5; i++) {
                this.animated.push(new eia10_2.Cloud(Math.random() * eia10_2.canvas.width, Math.random() * 100 + 50));
            }
        };
        Scene.prototype.makeBees = function () {
            for (var i = 0; i < 6; i++) {
                this.animated.push(new eia10_2.Bee(Math.random() * eia10_2.canvas.width, Math.random() * 800 + 300));
            }
        };
        Scene.prototype.makeTrees = function () {
            this.trees = [];
            for (var i = 0; i < 12; i++) {
                this.trees.push(new eia10_2.Tree(Math.random() * eia10_2.canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        };
        Scene.prototype.makeFlowers = function () {
            this.flowers = [];
            for (var i = 0; i < 200; i++) {
                this.flowers.push(new eia10_2.Flower(Math.random() * eia10_2.canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
            }
        };
        Scene.prototype.sortTrees = function (trees) {
            var temp = [];
            for (var i = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function (a, b) {
                return a - b;
            });
            for (var i = 0; i < trees.length; i++) {
                trees[i].y = temp[i];
            }
        };
        Scene.prototype.grass = function () {
            eia10_2.c.beginPath();
            eia10_2.c.rect(0, 450, eia10_2.canvas.width, eia10_2.canvas.height);
            var gradient = eia10_2.c.createLinearGradient(0, 450, 0, eia10_2.canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            eia10_2.c.fillStyle = gradient;
            eia10_2.c.fill();
        };
        return Scene;
    }());
    eia10_2.Scene = Scene;
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=scene.js.map