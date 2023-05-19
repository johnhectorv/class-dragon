const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friends){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friends = friends;
    }

    hasLifeGoals(){
        this.lifeGoals.forEach(goals => {
            console.log(`${this.name} likes to ${goals}`);
        });
    }

    helpsPeople(){
        return `${this.name} helps thier friend ${this.friend}`
    }
}

const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
      "live by the sea",
      "frolick in the autumn mist",
      "help small children"
    ],
    "Jackie Paper"
  );
  console.log(puff);
  console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
  puff.hasLifeGoals();
  console.log(puff.helpsPeople());

module.exports = FriendlyDragon;
