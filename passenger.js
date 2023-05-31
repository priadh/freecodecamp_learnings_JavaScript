//DOM-document object model,aka how u use js to modify a website

let countEl = document.getElementById("count-el");
let count=0;

//count-el is passed as an argument to getelementbyid  
//function
 


function increment() {
    // console.log("The button was clicked");
    count=count+1;
    countEl.innerText=count;//can replace with textContent here also
    // console.log(count);
    
}
// increment();//function call

let saveEl=document.getElementById("save-el");

function save(){
    let countStr=count+" - ";
    saveEl.textContent+=countStr;//replace innerText with textContent to see the last space of hyphen
    countEl.innerText=0;
    count=0;

}
// save();

let namee="Linda";
let greetings="Hi there";

let welcomeEll=document.getElementById("welcome-ell");

function welcome(){
    console.log(greetings+", "+namee+"!");
    // welcomeEll.innerText=str;
}
welcome();


let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints+=3;
}
function removePoint(){
    myPoints-=1;
}

add3Points();
removePoint();
add3Points();
removePoint();
add3Points();


// Call the functions to that the line below logs out 10
console.log(myPoints)

console.log("my points:" +5+9);//my points: 59 is output

//basics of variable and function
// let lap1=34;
// let lap2=35;
// let lap3=36;
// function laps(){
//     lapsum=lap1+lap2+lap3;
//      console.log(lapsum);
// }
// laps();

// let lapscompleted=0;

// function lapcount(){
//     lapscompleted=lapscompleted+1;
// }
// lapcount();
// lapcount();
// console.log(lapscompleted);

// let firstbatch=5;
// let secondbatch=7;
// let count=firstbatch+secondbatch;

// let count=0;//create variable
//js is top down read
// console.log(count);

// let myage=5;
// let humandogratio=7;
// let mydogage=myage*humandogratio;
// console.log(mydogage);

// let age=5;
// let myage=age;
// console.log(myage);

// let count=5;

// count=count+1;

// // count=1;

// console.log(count);


// STRINGS

let username="priya"; 
let msg="has 3 notifications";
console.log(username+" "+msg+"!");

let pts="1";
let pts1=2;
console.log(pts+pts1);//outputs 12,as 2 gets concatenated to string

let welcomeEl=document.getElementById("welcome-el");
let names="priya ";
let greeting="hi,welcome back "
welcomeEl.innerText=greeting+names;
welcomeEl.innerText+="👋";


