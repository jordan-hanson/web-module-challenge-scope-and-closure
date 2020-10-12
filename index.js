// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  
 * Answer: The difference is in the variable. In counter two they are using a global variable that can be accessed an minipulated with other functions. 
 * Counter 1 uses its variable on a local block within the counterMaker. const counter1 is also a variable that we are able to run the counterMaker when that variable is used it will fire off that one function when needed.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * const counter1 = counterMarker(); is the closure function. It uses the counter1 variable to fire off that function when delcared or ran. It then saves it in that variable storage system to use the returned answer each time ran within other data.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be used when needing to run a certain function and answer for multiple instances.
 * counter2 if you just need to use that answer one time or in order to other functions.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
// let startingScore = 0;
// // let currentScore = inningScore;

// function newBasket(inningScore) {
//   if (inningScore >= 0) {
//     let newBasket = inningScore + 2;
//     console.log(twoPointer, "This is the newScore answer");
//     return newBasket;
//   }
// }
// const inningScore = inning(inningScore, newBasket);
// newBasket(inningScore);

// function inning(currentScore, newScore) {
//   if (newScore === 2) {
//     return currentScore + 2;
//   } if (score === 3) {
//     return currentScore + 3;
//   }
// }

// newScore();
// console.log(inning(), "inning test")
// console.log(inning(), "inning test two")

function inning() {
  let newScore = Math.floor(Math.random() * 3 + 1);
  console.log(newScore, "randome math problem")
  return newScore;
}
inning();
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(/*code Here*/) {

  /*Code Here*/

}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


