// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  //I think that this will print "The murderer is Miss Scarlet" because you are saving the return statement of the declareMurderer function into the verdict variable, then printing that to the console

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//I think this cause an error because we are trying to reassign the const variable

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first print statement will print out 'The murderer is Mrs Peacock', as in the declareMurderer function, we have reassigned the murderer to Mrs Peacock.
// The second print statement will print out 'The murdered is Professor Plum', as we are not calling the function, so it is using the unchanged variable(which is not within the function)

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//This will print out 'Suspect three is Mrs Peacock' because suspectThree was only changed in the function.  When we call it outside the function, we use the original variable.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
  
  // This will print out 'the weapon is a revolver', as we have created the changeWeapon function to reassign a new weapon to the weapo key in our object.  Our declare weapon function then returns this in a string.  We call the changeWeapon function, calling in 'Revolver' and assign the declareWeapon function the verdict variable.  When we call this, it prints out the string.

//   let murderer = 'Colonel Mustard';

//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   This will print 'Mrs White', as the murderer has been assigned to Mrs White in the plot twist function.  The dclareMurderer function then prints this out in a string and it is saved to a variable verdict, which is printed out to the terminal

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Mr Green is the murderer because changeMurderer was declared before we printed to the terminal, whereas the other functions were called inside the function.

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
  
  //The weapon will be candelstick, as the last time it was reassigned to this in the unexpectedOutcome function

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   var murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//The murdered will be Professor Plum, as the murdered was reassigned inside the function but never declared outside the function

const scenario = {
    murdered: 'Luigi',
    location: 'Koopa Troopa Beach',
    weapon: 'shell'
};

const changeMurderer = function() {
    murderer = 'Bowser';
}

const plotTwist = function() {
    murderer = 'Mario';
 }

 plotTwist();

const changeLocation = function() {
    location = 'Rainbow Road'
}

const declareScenario = function() {
    return `The murderer is ${murderer} and the location is ${location}`;
}

changeMurderer();
changeLocation();
const verdict = declareScenario();
console.log(verdict);