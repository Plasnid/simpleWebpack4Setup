//we begin with class LifeForm
class LifeForm{
    //as with all classes, this has a constructor
    constructor(homePlanet, foodType){
      console.log(`I am a lifeform that is from ${homePlanet} and I eat ${foodType}`);
      this.homePlanet = homePlanet;
      this.foodType = foodType;
    }
    //lifeform has an eat method too
    eat(food){
      if(food==this.foodType){
        console.log(`I like this ${food} meal!`);
      }else{
        console.log(`I don't like the ${food} meal!`);
      }
    }
  };
  console.log("lets make a lifeform!");
  //here we make an ameoba which loves to eat minerals
  let ameoba = new LifeForm("Earth", "Minerals");
  
  //and here we can see that the minerals are a hit, but the steak, not so much
  ameoba.eat("Minerals");
  ameoba.eat("Steak");
  
  //now we make a new class that has everything that LifeForm was, but with a little something extra
  //it extends from LifeForm
  class Florb extends LifeForm{
    //unlike lifeform, this one asks for the number of tentacles
    constructor(homePlanet, foodType, numTentacles){
      //just like with ES5 we call the constructor with the values needed by the original class
      super(homePlanet, foodType);
      this.numTentacles = numTentacles;
    }
    //our Florb can trot, but a basic lifeform cannot
    tentacleTrot(){
      console.log("I am trotting along on my tentacles!!");
    }
  };
  
  let alien = new Florb("Zerkblatt", "Snozwuzzles", 12);
  alien.eat("Xanthborks");
  alien.tentacleTrot();
  