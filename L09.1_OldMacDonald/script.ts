namespace L09_1_OldMacDonaldsFarm {

    /*
    Aufgabe: L09_OldMcDonalsFarm
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 19.05.2021
    Quellen: Larissa Gaede, Maximilian Buckel
    */
   
class Animal {
    name: string; 
    type: string;
    food: string;
    foodAmount: number;
    sound: string;

    constructor(_name: string, _type: string, _food: string, _foodAmount: number, _sound: string) {
        this.name = _name;
        this.type = _type;
        this.food = _food;
        this.foodAmount = _foodAmount;
        this.sound = _sound;
    }

    sing(): void {
        let songDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("song");
        songDiv.innerHTML = "<b> " + this.name + " is now singing </b><br> Old Mac Donald had a farm, I-A-I-A-O. <br> And on his farm he had some " + this.type + "s" + ", I-A-I-A-O. <br> With a " + this.sound + "-" + this.sound + " here, and a "  + this.sound + "-" + this.sound + " there, <br> here a " + this.sound + ", there a " + this.sound + " ev'rywhere a " + this.sound + "-" + this.sound;
    }
}

class FoodStorage {
    meat: number;
    weed: number;
    sweets: number;
    sushi: number;
    carrot: number;

    constructor(_meat: number, _weed: number, _sweets: number, _sushi: number, _carrot: number) {
        this.meat = _meat;
        this.weed = _weed;
        this.sweets = _sweets;
        this.sushi = _sushi;
        this.carrot = _carrot;
    }

    eat(_food: string, _foodAmount: number, _name: string): void {
        let foodDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("food");
        if (_food == "meat") {
            this.meat -= _foodAmount;
            foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1 ) ? " piece" : " pieces") + " of " + _food + "<br> " + this.meat + ((this.meat == 1 ) ? " piece " : " pieces ") + "left";
        }  else if (_food == "weed") {
            this.weed -= _foodAmount;
            foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1 ) ? " piece" : " pieces") + " of " + _food + "<br> " + this.weed + ((this.weed == 1 ) ? " piece " : " pieces ") + "left";
        } else if (_food == "sweets") {
            this.sweets -= _foodAmount;
            foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1 ) ? " piece" : " pieces") + " of " + _food + "<br> " + this.sweets + ((this.sweets == 1 ) ? " piece " : " pieces ") + "left";
        } else if (_food == "sushi") {
            this.sushi -= _foodAmount;
            foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1 ) ? " piece" : " pieces") + " of " + _food + "<br> " + this.sushi + ((this.sushi == 1 ) ? " piece " : " pieces ") + "left";
        } else if (_food == "carrot") {
            this.carrot -= _foodAmount;
            foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1 ) ? " piece" : " pieces") + " of " + _food + "<br> " + this.carrot + ((this.carrot == 1 ) ? " piece " : " pieces ") + "left";
        }

    }
}

interface FoodDesired {
    meat: number;
    weed: number;
    sweets: number;
    sushi: number;
    carrot: number;
}


let foodStorage: FoodStorage = new FoodStorage(5, 18, 27, 10, 25);
let animalArr: Animal[] = [];
makeAnimals();



let i: number = 0;
let dayCounter: number = 1;
let hasBought: boolean = false;
let nextBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("next");
nextBtn.innerHTML = "Start";
nextBtn.addEventListener("click", function(): void {
    if (i < animalArr.length) {
        let img: HTMLImageElement = <HTMLImageElement> document.getElementById("img");
        if (animalArr[i].type == "cat") img.setAttribute("src", "./cat.jpg");
        if (animalArr[i].type == "dog") img.setAttribute("src", "./dog.jpg");
        if (animalArr[i].type == "catgirl") img.setAttribute("src", "./catgirl.jpg");
        if (animalArr[i].type == "rabbit") img.setAttribute("src", "rabbit.jpg");
        if (animalArr[i].type == "horse") img.setAttribute("src", "./horse.jpg");
        if (animalArr[i].type == "human") img.setAttribute("src", "./shoto.jpg");
        hasBought = false;
        nextBtn.innerHTML = "Next";
        animalArr[i].sing();
        foodStorage.eat(animalArr[i].food, animalArr[i].foodAmount, animalArr[i].name);
        inventory();
        i++;
    } else {
        buyFood();
        nextBtn.innerHTML = "Next Day";
        alert("Day " + dayCounter + " is over" + "\n" +
        ((hasBought) ? "Bought" : "Hasn't bought") + "\n" + 
        "Current Food Storage: " + "\n" +
        "Meat: " + foodStorage.meat + "\n" +
        "Weed: " + foodStorage.weed + "\n" +
        "Sweets: " + foodStorage.sweets + "\n" +
        "Sushi: " + foodStorage.sushi + "\n" +
        "Carrot: " + foodStorage.carrot);
        i = 0;
        dayCounter++;
    }
} );

function inventory(): void {
    let inventoryDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("inventory");
    inventoryDiv.innerHTML =  "<b> Inventory: </b> " + "<br>" +
        "Meat: " + foodStorage.meat + "<br>" +
        "Weed: " + foodStorage.weed + "<br>" +
        "Sweets: " + foodStorage.sweets + "<br>" +
        "Sushi: " + foodStorage.sushi + "<br>" +
        "Carrot: " + foodStorage.carrot;
}


function makeAnimals(): void {
    animalArr.push(new Animal("Bella", "cat", "meat", 2, "meow"));
    animalArr.push(new Animal("Niko", "dog", "meat", 3, "niko-niko-nii"));
    animalArr.push(new Animal("Shiro", "catgirl", "sweets", 10, "nya~"));
    animalArr.push(new Animal("Pfote", "rabbit", "carrot", 3, "nom-nom"));
    animalArr.push(new Animal("Daily", "horse", "weed", 5, "wheeeaaa"));
    animalArr.push(new Animal("Eva", "human", "sushi", 5, "omae wa mo shindeiru"));
}

function foodNeeded(): FoodDesired {
    let foodDesired: FoodDesired = {meat: 0, weed: 0, sweets: 0, sushi: 0, carrot: 0};
    for (let i: number = 0; i < animalArr.length; i++) {
        if (animalArr[i].food == "meat") foodDesired.meat += animalArr[i].foodAmount;
        if (animalArr[i].food == "weed") foodDesired.weed += animalArr[i].foodAmount;  
        if (animalArr[i].food == "sweets") foodDesired.sweets += animalArr[i].foodAmount; 
        if (animalArr[i].food == "sushi") foodDesired.sushi += animalArr[i].foodAmount;
        if (animalArr[i].food == "carrot") foodDesired.carrot += animalArr[i].foodAmount;
    }
    return foodDesired;
}

function buyFood(): void {
    if (foodStorage.meat < foodNeeded().meat) {
        foodStorage.meat +=  Math.round(foodNeeded().meat * 2 * Math.random() + foodNeeded().meat);
        hasBought = true;
        console.log("bought meat");
    }
    if (foodStorage.weed < foodNeeded().weed) {
        foodStorage.weed +=  Math.round(foodNeeded().weed * 2 * Math.random() + foodNeeded().weed);
        hasBought = true;
        console.log("bought weed");
    }
    if (foodStorage.sweets < foodNeeded().sweets) {
        foodStorage.sweets +=  Math.round(foodNeeded().sweets * 2 * Math.random() + foodNeeded().sweets);
        hasBought = true;
        console.log("bought sweets");
    }
    if (foodStorage.sushi <  foodNeeded().sushi) {
        foodStorage.sushi += Math.round(foodNeeded().sushi * 2 * Math.random() + foodNeeded().sushi);
        hasBought = true;
        console.log("bought sushi");
    }
    if (foodStorage.carrot < foodNeeded().carrot) {
        foodStorage.carrot += Math.round(foodNeeded().carrot * 2 * Math.random() + foodNeeded().carrot);
        hasBought = true;
        console.log("bought carrots");
    }
}
}
