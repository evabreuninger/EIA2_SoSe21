"use strict";
var eia10;
(function (eia10) {
    let canvas = document.getElementById("canvas");
    let c = canvas.getContext("2d");
    class DayNightCycle {
        constructor(_size, _angle, _timeScale) {
            this.timeScale = _timeScale;
            this.time = 0;
            this.current = 0;
            this.total = 2 * Math.PI / this.timeScale;
            this.cX = canvas.width / 2;
            this.cY = canvas.height / 3;
            this.rX = canvas.width * 0.4;
            this.rY = canvas.height * 0.28;
            this.size = _size;
            this.angle = _angle;
            this.timeScale = _timeScale;
        }
        update() {
            this.angle += this.timeScale;
            this.sky();
            this.sun();
            this.moon();
            this.time++;
            this.current = this.time % (this.total);
        }
        sun() {
            c.beginPath();
            let x = this.cX + this.rX * Math.cos(this.angle);
            let y = this.cY + this.rY * Math.sin(this.angle);
            let gradient = c.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            c.fillStyle = gradient;
            c.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        }
        moon() {
            c.beginPath();
            let x = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            let y = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            let gradient = c.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            c.arc(x, y, this.size, 0, 2 * Math.PI);
            c.fillStyle = gradient;
            c.fill();
        }
        nightAtmosphere() {
            c.beginPath();
            c.fillStyle = "rgba(39, 33, 78, 0.5)";
            c.fillRect(0, 0, canvas.width, canvas.height);
        }
        isNight() {
            return this.time % (this.total) > (this.total) / 2.1;
        }
        sky() {
            c.beginPath();
            c.rect(0, 0, canvas.width, canvas.height);
            if (this.current > 0 && this.current < this.total * 0.02)
                c.fillStyle = this.colorFade(39, 33, 78, 255, 107, 62, this.time % this.total, this.total * 0.02);
            if (this.current > this.total * 0.02 && this.current < this.total * 0.6)
                c.fillStyle = this.colorFade(255, 107, 62, 181, 214, 224, this.time % this.total - (this.total * 0.02), this.total * 0.04);
            if (this.current > this.total * 0.06 && this.current < this.total * 0.44)
                c.fillStyle = "rgb(181, 214, 224)";
            if (this.current > this.total * 0.44 && this.current < this.total * 0.47)
                c.fillStyle = this.colorFade(181, 214, 224, 255, 107, 62, this.time % this.total - (this.total * 0.44), this.total * 0.03);
            if (this.current > this.total * 0.47 && this.current < this.total * 0.5)
                c.fillStyle = this.colorFade(255, 107, 62, 39, 33, 78, this.time % this.total - (this.total * 0.47), this.total * 0.03);
            if (this.current > this.total * 0.5 && this.current < this.total * 1)
                c.fillStyle = "rgb(39,33,78)";
            c.fill();
        }
        colorFade(rS, gS, bS, rE, gE, bE, i, steps) {
            let r = rS + ((rE - rS) / steps) * i;
            let g = gS + ((gE - gS) / steps) * i;
            let b = bS + ((bE - bS) / steps) * i;
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
    class Mountain {
        constructor(x, y, w, h) {
            this.points = [];
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            console.log(this.pointAmount);
            for (let i = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.w / this.pointAmount) + (this.x + (this.w / this.pointAmount) * i), Math.random() * this.h / 1.25 + this.y]);
            }
        }
        draw() {
            c.beginPath();
            c.moveTo(this.x, this.y + this.h);
            c.lineTo(this.x, this.y + this.h / 2);
            for (let i = 0; i < this.pointAmount; i++) {
                c.lineTo(this.points[i][0], this.points[i][1]);
            }
            c.lineTo(this.x + this.w, this.y + this.h / 2);
            c.lineTo(this.x + this.w, this.y + this.h);
            let gradient = c.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            c.fillStyle = gradient;
            c.fill();
        }
    }
    class Flower {
        constructor(x, y, height) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.type = Math.round(Math.random() + 1);
            this.scale = Math.random() * 4 + 10;
            this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
        }
        draw() {
            switch (this.type) {
                case 1:
                    this.flowerType1();
                    break;
                case 2:
                    this.flowerType2();
                    break;
            }
        }
        flowerType1() {
            c.beginPath();
            c.fillStyle = "rgb(0, 150, 0)";
            c.fillRect(this.x, this.y, 6, -this.height);
            c.beginPath();
            let gradient = c.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            c.fillStyle = gradient;
            c.fillRect(0, 0, canvas.width, canvas.height);
        }
        flowerType2() {
            c.beginPath();
            c.fillStyle = "rgb(0,150,0)";
            c.fillRect(this.x, this.y, 6, -this.height);
            c.beginPath();
            c.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            c.fillStyle = "yellow";
            c.fill();
            for (let i = 1; i <= 8; i++) {
                c.beginPath();
                c.arc(this.x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                c.fillStyle = this.color;
                c.fill();
            }
        }
    }
    class Tree {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.height = -150 - Math.random() * 100;
            this.makeColors();
            this.makeValues();
        }
        draw() {
            c.beginPath();
            c.fillStyle = "rgb(83, 49, 24)";
            c.fillRect(this.x, this.y, 40, this.height);
            for (let i = 0; i < 10; i++) {
                c.beginPath();
                c.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                c.fillStyle = this.colors[i];
                c.fill();
            }
        }
        makeValues() {
            this.valuesX = [];
            this.valuesY = [];
            for (let i = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        }
        makeColors() {
            this.colors = [];
            for (let i = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        }
    }
    class Bee {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vX = Math.random() * 8 - 4;
            this.vY = Math.random() * 8 - 4;
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
        }
        update() {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.draw();
        }
        draw() {
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
            }
            else {
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? 0 : 0, 0, Math.PI * 2);
            }
            c.fillStyle = "rgba(180,180,180, 0.7)";
            c.fill();
            c.lineWidth = 2;
            c.strokeStyle = "rgb(100,100,100)";
            c.stroke();
        }
        updateVelocities() {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }
            if (this.x >= canvas.width - this.scale) {
                this.vX = -this.vX;
                this.x = canvas.width - this.scale;
            }
            if (this.x <= 0 + this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }
            if (this.y >= canvas.height - this.scale) {
                this.vY = -this.vY;
                this.y = canvas.height - this.scale;
            }
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }
        }
    }
    class Cloud {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.sizeX = 150;
            this.vX = Math.random() * 1 + 1;
        }
        update() {
            this.x += this.vX;
            if (this.x > canvas.width + this.sizeX)
                this.x = 0 - this.sizeX;
            this.draw();
        }
        draw() {
            c.beginPath();
            c.save();
            c.scale(1.5, 1.5);
            c.arc(this.x, this.y, 25, 0, Math.PI * 2);
            c.arc(this.x + 25, this.y - 10, 25, 0, Math.PI * 2);
            c.arc(this.x + 60, this.y, 20, 0, Math.PI * 2);
            c.arc(this.x + 25, this.y, 25, 0, Math.PI * 2);
            c.arc(this.x + 45, this.y, 20, 0, Math.PI * 2);
            c.fillStyle = "rgba(255,255,255,0.7)";
            c.fill();
            c.restore();
        }
    }
    class Scene {
        constructor(_timeScale) {
            this.dayNightCycle = new DayNightCycle(70, Math.PI, _timeScale);
            this.mountain = new Mountain(0, 150, canvas.width, 300);
            this.mountain2 = new Mountain(0, 300, canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeBees();
            this.makeClouds();
        }
        update() {
            this.dayNightCycle.update();
            this.grass();
            for (let cloud of this.clouds) {
                cloud.update();
            }
            this.mountain.draw();
            this.mountain2.draw();
            for (let flower of this.flowers) {
                flower.draw();
            }
            for (let tree of this.trees) {
                tree.draw();
            }
            for (let bee of this.bees) {
                bee.update();
            }
            if (this.dayNightCycle.isNight())
                this.dayNightCycle.nightAtmosphere();
        }
        makeClouds() {
            this.clouds = [];
            for (let i = 0; i < 5; i++) {
                this.clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * 100 + 50));
            }
        }
        makeBees() {
            this.bees = [];
            for (let i = 0; i < 6; i++) {
                this.bees.push(new Bee(Math.random() * canvas.width, Math.random() * 800 + 300));
            }
        }
        makeTrees() {
            this.trees = [];
            for (let i = 0; i < 12; i++) {
                this.trees.push(new Tree(Math.random() * canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        }
        makeFlowers() {
            this.flowers = [];
            for (let i = 0; i < 200; i++) {
                this.flowers.push(new Flower(Math.random() * canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
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
            c.beginPath();
            c.rect(0, 450, canvas.width, canvas.height);
            let gradient = c.createLinearGradient(0, 450, 0, canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            c.fillStyle = gradient;
            c.fill();
        }
    }
    let timeScale = 0.005;
    let scene = new Scene(timeScale);
    setInterval(updateAll, 30);
    function updateAll() {
        scene.update();
    }
})(eia10 || (eia10 = {}));
//# sourceMappingURL=script.js.map