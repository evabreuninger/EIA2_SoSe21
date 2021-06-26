namespace eia11_1 {
    export class Scene {
        mountain: Mountain;
        mountain2: Mountain;
        animated: Animated[];
        flowers: Flower[];
        trees: Tree[];
        beeHive: BeeHive;

        constructor(_timeScale: number) {
            this.animated = [new DayNightCycle(70, Math.PI, _timeScale)];
            this.mountain = new Mountain(0, 150, canvas.width, 300);
            this.mountain2 = new Mountain(0, 300, canvas.width, 150);
            this.beeHive = new BeeHive(0.5 * canvas.width, 0.5 * canvas.height, 100);
            this.makeTrees();
            this.makeFlowers();
            this.makeClouds();
            setTimeout(() => {
                this.makeBees();
            }, 2000);
        }

        update(): void {
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
            if (DayNightCycle.isNight()) DayNightCycle.nightAtmosphere();
        }

        makeClouds(): void {
            for (let i: number = 0; i < 5; i++) {
                this.animated.push(new Cloud(Math.random() * canvas.width, Math.random() * 100 + 50));
            }
        }

        makeBees(): void {
            for (let i: number = 0; i < 6; i++) {
                this.makeBee(this.beeHive.x, this.beeHive.y);
            }
        }

        makeBee(x: number, y: number): void {
            this.animated.push(new Bee(x, y));
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
                this.flowers.push(new Flower(100 + (Math.random() * 1700), (Math.random() * 450 + 460), Math.random() * 15 + 30));
            }
        }

        findJuicyFlower(bee: Bee): Flower {
            let best: Flower = this.flowers[Math.floor(Math.random() * this.flowers.length)]; // start with a random one
            console.log(best)
            let bestLevel: number = best.nectarLevel;
            for (let flower of this.flowers) {
                if (flower.y < 30 || flower.y > window.innerHeight - 50) continue;
                if (flower.x < 30 || flower.x > window.innerWidth - 50) continue;
                // look for the closest
                let distance = Math.sqrt(Math.pow(flower.x - bee.x, 2) + Math.pow(flower.y - bee.y, 2));
                if (distance > 200) continue;
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

        sortTrees(trees: Tree[]): void {
            let temp: number[] = [];
            for (let i: number = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function (a: number, b: number): number {
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
