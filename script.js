/* document.getElementById("count-el").innerHTML = 5; */

/* let count = 0;
console.log(count);


let myAge = 20;
let humanDogRatio =10;
myDogAge = myAge * humanDogRatio;
console.log(myDogAge); 


let bonusPoints = 50;
bonusPoints  +=50;
bonusPoints -=25;
bonusPoints +=70;


console.log(bonusPoints); */









/* function raceCountdown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log(0);
    console.log("Start");

}
 */
/* console.log(raceCountdown);
or */

/* raceCountdown()


function myJs(){
    console.log(43)
}

myJs() */


/* 
let lapsCompleted = 0

function laps(){
  lapsCompleted = lapsCompleted + 1;
}



laps()
laps()
laps()

console.log(lapsCompleted) */











/* 
let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints
console.log(totalPoints) */







let countEl = document.getElementById("count-el")

let count  = 0

function increment(){
  count += 1
  countEl.innerText = count
}

function save(){
  console.log(count)
}





let countJe = document.getElementById("count-el")


function decrement(){
  count = count - 1
  countJe.innerText = count
}

function dele(){
  console.log(count)
}





let welcomeEl = document.getElementById("welcome-el")
let identity =  prompt("what's your name"); 
let greeting = 'Welcome ' +  identity
welcomeEl.innerText = greeting + "👋"



let saveEl = document.getElementById("save-el")


function save(){
  let countSt = count + " - "
  saveEl.innerText+=countSt
  console.log(count)
}

