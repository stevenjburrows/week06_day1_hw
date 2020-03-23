// # Scope Homework: Who Dunnit

// ### Learning Objectives

// - Understand function scope
// - Know the difference in between the let and const keywords

// ## Brief

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// ### MVP

// #### Episode 1

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//this should return the string 'The murderer is Miss Scarlet
// ```

// // #### Episode 2

// // ```js
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
// this should return give an error when changeMurderer is called as the variable murderer is a const

// ```

// #### Episode 3

// ```js
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// this should print out 'Frist Verdict: The murderer is Mrs Peackock

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// this should print out 'Second Verdict: The murderer is Professor Plumb 

// ```

// #### Episode 4

// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// this should print out the 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
// console.log(`Suspect three is ${suspectThree}.`);
// this should print 'Suspect three is Mrs. Peacock' as colonel Mustard is only avilable in the function
// ```

// #### Episode 5

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// this should return 'The weapon is the candle stick' as there was no return in the changeWeapon function
// I was wrong it must have changed it in the variable and didn't need a return
// ```

// #### Episode 6

// ```js
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// this should print ' The murderer is Mrs White' as when changeMuderer is called, plotTwist is called as part of that function
// ```

// #### Episode 7

// ```js
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
//this should print 'The murderer is Miss Scarlet' as Colonel Mustard is only available in the plotTwist function
// Answer was Mr Green, this could be becasue the let in plotTwist carried into unexpectedOutcome so Miss Scarlet can't be returned

// ```

// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// this should print 'The weapon is lead pipe'  The changeScenario doesn't change the weapon
// unexpectedOutcome is false as Mrs. Peacock doesn't === Colonel Mustard so doesn't change a thing
// plotTwist is true but that doesn't change the weapon
// it was the candle stick, the unexpectedOutcome must have ran for a second time, thus changing the weapon
// ```

// #### Episode 9

// ```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// this should print 'The murderer is Professor plum' as the murderer variable is only available in the if block

// ```

// ### Extensions

// Make up your own episode!
