import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// /* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

const worldCupNames = fifaData.filter(function(finalStage){    
    return finalStage.Stage==="Final" && finalStage.Year===2014;
  });
  const worldCupNames0bj = worldCupNames[0];
  console.log(worldCupNames0bj["Home Team Name"]);
  console.log(worldCupNames0bj["Away Team Name"]);
  console.log(worldCupNames0bj["Home Team Goals"]);
  console.log(worldCupNames0bj["Away Team Goals"]);
//   console.log(worldCupNames0bj["Home Team Name"] + " is the Winner of the 2014 world cup final")

  if(worldCupNames0bj["Home Team Goals"] > worldCupNames0bj["Away Team Goals"]){
    console.log(worldCupNames0bj["Home Team Name"] + " wins!");
}
else{
    console.log(worldCupNames0bj["Away Team Name"] + " wins!");
}


// (a) Home Team name for 2014 world cup final
// (b) Away Team name for 2014 world cup final
// (c) Home Team goals for 2014 world cup final
// (d) Away Team goals for 2014 world cup final
// (e) Winner of 2014 world cup final */


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


const getFinals = fifaData.filter((finalStage)=>{
    return finalStage.Stage==="Final";
  })
  console.log(getFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
const getYears = getFinals.map((allYears)=>{
    return allYears.Year;
})
console.log(getYears);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



function getWinners(){
    let finals = getFinals;
    let finalArr = [];
    finals.filter(function(score){
        if(score["Home Team Goals"] > score["Away Team Goals"]){
            finalArr.push(score["Home Team Name"]);           
        }else{  
            finalArr.push(score["Away Team Name"]);       
        }                
    })
    return finalArr;
    }
console.log(getWinners());

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
     let winningTeamName = getWinners();
     let winningYear = getYears; 
     for(let x=0; winningYear.length>x; x++){         
    console.log(`In ${winningYear[x]}, ${winningTeamName[x]} won the world cup! \n`); 
     }
};
getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


const getAverageGoals = fifaData.reduce(function(acc, item){
    console.log(`I am the accumulator ${acc} and I am the home score ${item["Home Team Goals"]} I am Away ${item["Away Team Goals"]}`);
     return acc + item["Home Team Goals"] + item["Away Team Goals"] / 851;
},0);


// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
