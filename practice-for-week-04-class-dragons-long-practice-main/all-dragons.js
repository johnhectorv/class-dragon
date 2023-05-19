const FriendlyDragon = require('./classes/friendly-dragon.js');
const EvilDragon = require('./classes/evil-dragon.js');
const Dragon = require('./classes/dragon.js');

const falkor = new FriendlyDragon (
  'Falkor',
  'white',
  ['save Atreyu from the swamp',
  'save Atreyu from the Nothing',
  'care the local bullies into a dumpster'
  ],
  'Bastia'
  );

const smaug = new EvilDragon (
  'Smaug',
  'black',
  ["take over your mountain kingdom",
  "steal all your dwarven gold",
  "burn down your floating village"
  ],
  "Dwarf King"
  );

const allDragons = Dragon.getDragons(falkor, smaug);

console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());

console.log(smaug);
smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());

console.log(allDragons);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
