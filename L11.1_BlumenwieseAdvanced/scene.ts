namespace eia10_2 {
    export class Scene {
        mountain: Mountain;
        mountain2: Mountain;
        animated: Animated[];
        flowers: Flower[]; 
        trees: Tree[];
        timeScale: number;

        constructor(_timeScale: number) {
            this.animated = [new DayNightCycle(70, Math.PI, _timeScale)];
            this.mountain = new Mountain(0, 150, canvas.width, 300);
            this.mountain2 = new Mountain(0, 300, canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeClouds();
            this.makeBees();   
        }
        
        update(): void {
            this.animated[0].update(); 
            this.grass(); 
            this.mountain.draw(); 
            this.mountain2.draw();
            for (let flower of this.flowers) {
                flower.draw();
            }
            for (let tree of this.trees) {
                tree.draw();
            }
            for (let i: number = 1; i < this.animated.length; i++) {
                this.animated[i].update();
            }  
            if (DayNightCycle.isNight()) DayNightCycle.nightAtmosphere();
        }

        makeClouds(): void {
            for (let i: number = 0; i < 5; i++) {
                this.animated.push(new Cloud(Math.random() * canvas.width, Math.random() * 100 + 50));
            }
        }

        makeBees(): void {
            for (let i: number = 0; i < 6; i++) {
                this.animated.push(new Bee(Math.random() * canvas.width, Math.random() * 800  + 300));
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
}