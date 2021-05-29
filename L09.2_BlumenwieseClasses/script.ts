namespace L092_BlumenwieseCasses {

     /*
    Aufgabe: L09.2_BlumenwieseClasses
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 29.05.2021
    Quellen: Larissa Gaede, Maximilian Buckel
    */

    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
    let c: CanvasRenderingContext2D = canvas.getContext("2d");

    class DayNightCycle {
        cX: number;
        cY: number;
        rX: number;
        rY: number;
        size: number;
        angle: number;
        timeScale: number;
        time: number;
        total: number;
        current: number;

        constructor(_size: number, _angle: number, _timeScale: number) {
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

        update(): void {
            this.angle += this.timeScale;
            this.sky();
            this.sun();
            this.moon();
            this.time++;
            this.current = this.time % (this.total);
        }

        sun(): void {
            c.beginPath();
            let x: number = this.cX + this.rX * Math.cos(this.angle);
            let y: number = this.cY + this.rY * Math.sin(this.angle);
            let gradient: CanvasGradient = c.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            c.fillStyle = gradient;
            c.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        }

        moon(): void {
            c.beginPath();
            let x: number = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            let y: number = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            let gradient: CanvasGradient = c.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            c.arc(x, y, this.size, 0, 2 * Math.PI);
            c.fillStyle = gradient;
            c.fill();
        }

        nightAtmosphere(): void {
            c.beginPath();
            c.fillStyle = "rgba(39, 33, 78, 0.5)";
            c.fillRect(0, 0, canvas.width, canvas.height);
        }

        isNight(): boolean {
            return this.time % (this.total) > (this.total) / 2.1;
        }

        sky(): void {
            c.beginPath();
            c.rect(0, 0, canvas.width, canvas.height); 
            if (this.current > 0 && this.current < this.total * 0.02)c.fillStyle = this.colorFade(39, 33, 78, 255, 107, 62, this.time % this.total, this.total * 0.02);
            if (this.current > this.total * 0.02 && this.current < this.total * 0.6) c.fillStyle = this.colorFade(255, 107, 62, 181, 214, 224, this.time % this.total - (this.total * 0.02), this.total * 0.04);
            if (this.current > this.total * 0.06 && this.current < this.total * 0.44) c.fillStyle = "rgb(181, 214, 224)";
            if (this.current > this.total * 0.44 && this.current < this.total * 0.47) c.fillStyle = this.colorFade(181, 214, 224, 255, 107, 62, this.time % this.total - (this.total * 0.44), this.total * 0.03);
            if (this.current > this.total * 0.47 && this.current < this.total * 0.5) c.fillStyle = this.colorFade(255, 107, 62, 39, 33, 78, this.time % this.total - (this.total * 0.47), this.total * 0.03);
            if (this.current > this.total * 0.5 && this.current < this.total * 1) c.fillStyle = "rgb(39,33,78)";  
            c.fill();
        }

        private colorFade(rS: number, gS: number, bS: number, rE: number, gE: number, bE: number, i: number, steps: number): string {
            let r: number = rS + ((rE - rS) / steps) * i;
            let g: number = gS + ((gE - gS) / steps) * i;
            let b: number = bS + ((bE - bS) / steps) * i; 
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    class Mountain {
        x: number;
        y: number;
        w: number;
        h: number;
        pointAmount: number;
        points: number[][] = [];

        constructor(x: number, y: number, w: number, h: number) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            console.log(this.pointAmount);
            for (let i: number = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.w / this.pointAmount) + (this.x + (this.w / this.pointAmount) * i), Math.random() * this.h / 1.25 + this.y]);
            }
        }

        draw(): void {
            c.beginPath();
            c.moveTo(this.x, this.y + this.h);
            c.lineTo(this.x, this.y + this.h / 2);
            for (let i: number = 0; i < this.pointAmount; i++) {
                c.lineTo(this.points[i][0], this.points[i][1]);
            }
            c.lineTo(this.x + this.w, this.y + this.h / 2);
            c.lineTo(this.x + this.w, this.y + this.h);
            let gradient: CanvasGradient = c.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            c.fillStyle = gradient;
            c.fill();
        }
    }

    class Flower {
        x: number;
        y: number;
        height: number;
        type: number;
        scale: number;
        color: string;

        constructor(x: number, y: number, height: number) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.type = Math.round(Math.random() + 1);
            this.scale = Math.random() * 4 + 10;
            this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";

        }

        draw(): void {
            switch (this.type) {
                case 1: this.flowerType1();
                        break;
                case 2: this.flowerType2();
                        break;
            }
        }

        flowerType1(): void {
            c.beginPath();
            c.fillStyle = "rgb(0, 150, 0)";
            c.fillRect(this.x, this.y, 6, - this.height);
            c.beginPath();
            let gradient: CanvasGradient = c.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            c.fillStyle = gradient;
            c.fillRect(0, 0, canvas.width, canvas.height);
        }

        flowerType2(): void {
            c.beginPath();
            c.fillStyle = "rgb(0,150,0)";
            c.fillRect(this.x, this.y, 6, - this.height);
            c.beginPath();
            c.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            c.fillStyle = "yellow";
            c.fill();
            for (let i: number = 1; i <= 8; i++) {
                c.beginPath();
                c.arc(this. x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                c.fillStyle = this.color;
                c.fill();
            }  
        }
    }

    class Tree {
        x: number;
        y: number;
        height: number;
        sizes: number[];
        valuesX: number[];
        valuesY: number[];
        colors: string[];

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.height = -150 - Math.random() * 100; 
            this.makeColors();
            this.makeValues();
        }

        draw(): void {
            c.beginPath();
            c.fillStyle = "rgb(83, 49, 24)";
            c.fillRect(this.x, this.y, 40, this.height);

            for (let i: number = 0; i < 10; i++) {
                c.beginPath();
                c.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                c.fillStyle = this.colors[i];
                c.fill();
            }
        }
        makeValues(): void {
            this.valuesX = [];
            this.valuesY = [];
            for (let i: number = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        }

        makeColors(): void {
            this.colors = [];
            for (let i: number = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        }
    }

    class Bee {
        x: number;
        y: number;
        vX: number;
        vY: number;
        time: number;
        changeTime: number;
        scale: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.vX = Math.random() * 8 - 4;
            this.vY = Math.random() * 8 - 4;
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
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
                c.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : - Math.PI / 8, 0, Math.PI * 2);
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

        updateVelocities(): void {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }

            if (this.x >= canvas.width - this.scale) {
                this.vX  = -this.vX;
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
        x: number;
        y: number;
        vX: number;
        sizeX: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.sizeX = 150;
            this.vX = Math.random() * 1 + 1;
        }

        update(): void {
            this.x += this.vX;
            if (this.x > canvas.width + this.sizeX) this.x = 0 - this.sizeX;
            this.draw();
        }

        draw(): void {
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
        dayNightCycle: DayNightCycle;
        mountain: Mountain;
        mountain2: Mountain;
        flowers: Flower[]; 
        trees: Tree[];
        bees: Bee[];
        clouds: Cloud[];
        timeScale: number;

        constructor(_timeScale: number) {
            this.dayNightCycle = new DayNightCycle(70, Math.PI, _timeScale);
            this.mountain = new Mountain(0, 150, canvas.width, 300);
            this.mountain2 = new Mountain(0, 300, canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeBees();
            this.makeClouds();
        }
        
        update(): void {
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
            if (this.dayNightCycle.isNight()) this.dayNightCycle.nightAtmosphere();    
        }

        makeClouds(): void {
            this.clouds = [];
            for (let i: number = 0; i < 5; i++) {
                this.clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * 100 + 50));
            }
        }

        makeBees(): void {
            this.bees = [];
            for (let i: number = 0; i < 6; i++) {
                this.bees.push(new Bee(Math.random() * canvas.width, Math.random() * 800  + 300));
            }
        }

        makeTrees(): void {
            this.trees = [];
            for (let i: number = 0; i < 12; i++) {
                this.trees.push(new Tree(Math.random() * canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        }
        makeFlowers(): void {
            this.flowers = [];
            for (let i: number = 0; i < 200; i++) {
                this.flowers.push(new Flower(Math.random() * canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
            }  
        }

        sortTrees(trees: Tree[]): void {
            let temp: number[] = [];
            for (let i: number = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function(a: number, b: number): number {
                return a - b;
            });
            for (let i: number = 0; i < trees.length; i++) {
                trees[i].y = temp[i];
            }
        } 
        
        grass(): void {
            c.beginPath();
            c.rect(0, 450, canvas.width, canvas.height);
            let gradient: CanvasGradient = c.createLinearGradient(0, 450, 0, canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            c.fillStyle = gradient;
            c.fill();
        }
    }

    let timeScale: number = 0.005;
    let scene: Scene = new Scene(timeScale);


    setInterval(updateAll, 30);
    
    function updateAll(): void {
        scene.update();
    }
}