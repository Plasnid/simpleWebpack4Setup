//thats right, es6 makes use of the class keyword
class Henchman {
    //classes need to have a constructor, and that constructor is called automatically
    constructor(henchName, likesCandygrams, favouriteSheriff) {
        //"this" refers to the Henchman class
        //we are wetting the values of the henchman based on our inputs henchName, likesCandygrams, favouriteSheriff
        this.likesCandygrams = likesCandygrams;
        this.favouriteSheriff = favouriteSheriff;
        this.henchName = henchName;
        this.weaponOfChoice = "evil stare";
        console.log(`There is a new henchman in town and his name is ${this.henchName}`);
        if (this.likesCandygrams == true) {
            console.log(`I hear he likes candy from Sherif ${this.favouriteSheriff}`)
        }
    }
    //notice that we don't need the function keyword to declare a function
    acceptCandyGram() {
        let chanceKaboom = Math.random();
        if (chanceKaboom < 0.90) {
            console.log(`${this.henchName} is pawn of fate!`);
        } else {
            console.log(`Yum! Candy from Sherif ${this.favouriteSheriff}!`);
        }
    }
    //static functions are accessible from the class, but not from instances of the class
    static isHenchmanTough(henchName) {
        if (henchName == "Mongo") {
            console.log(`${henchName} just punched out sherifs horse!`);
        } else {
            console.log(`not sure if ${henchName} is tough`)
        }
    }
    //getters and setters expose values without exposing what they are really called in the class
    get weapon() {
        return this.weaponOfChoice;
    }
    set weapon(wp) {
        this.weaponOfChoice = wp;
    }
}
let mongo = new Henchman("Mongo", true, "Bart");
Henchman.isHenchmanTough("Mongo");
console.log(`This Henchman fights with ${mongo.weapon}`);
mongo.weapon = "fists";
console.log(`This Henchman fights with ${mongo.weapon}`);