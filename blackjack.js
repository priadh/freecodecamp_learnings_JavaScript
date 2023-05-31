// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

//RETURN VALUES FROM FUNCTION
let firstplayer=21;
let secondplayer=14;

function getfastestplayer(){
      if(firstplayer>secondplayer){
         return firstplayer;
      }
      else if(firstplayer<secondplayer){
         return secondplayer;
      }
      else{
         return firstplayer;
      }
}
let fastestrace=getfastestplayer();
console.log(fastestrace);

function totaltime(){
    let  total=firstplayer+secondplayer;
    return total;
}
let totaloutput=totaltime();
console.log(totaloutput);





let randomnumber= Math.random()*6;//ccreates random number including 0 but not one,multiply by 6 it will be from 0 to 6 but not including 6
console.log(randomnumber);

let flooredNumber= Math.floor(3.45632);
console.log(flooredNumber);

let randomNumber1=Math.floor(Math.random()*6);//0,1,2,3,4,5
console.log(randomNumber1);

let randomNumber=Math.floor(Math.random()*6)+1;//1,2,3,4,5,6
console.log(randomNumber);

function rolldice(){
   let diceno=Math.floor(Math.random()*6)+1;
   return diceno;
}
// let randice=rolldice();
console.log(rolldice());

// let firstCard=getRandomCard();
// let secondCard=getRandomCard();
let cards=[];
let hasblackjack=false;
let isalive=true;
let msg="";
let sum=0;
console.log(sum);

function getRandomCard(){
   let genrandonno=(Math.floor(Math.random()*13)+1);//1 to 13
    if (genrandonno===1){
      return 11;
    }
    else if(genrandonno>10){
      return 10;
    }
 
    else{
      return genrandonno;
    }
}
 //ARRAYS/ordered list of items,mixing of dtypes allowed,complex dtypes
let myself=["priyu",20,"true"];
myself.push("yeah");
myself.pop();//last item deleted
console.log(myself);

//  let cards=[firstCard,secondCard];

console.log(cards.length);
// if(sum<=20){
//      msg="Do you want to draw a new card?";
// }
// else if(sum===21)//double = does not works if 21 was a string as it will convert 21 into number if it was number on left hand side too like 21="21" this equates to true ,so we use triple =
// {
//       msg="whoa! you got blackjack";
//       hasblackjack=true;
// }
// else if(sum>21){
//     msg="oh! lost";
//     isalive=false;
// }

//can use else too in line else if(sum>21)


//FOR LOOPS
for(let count=1;count<11;count+=1){
   console.log(count);
}

let msgEl=document.getElementById("msg-el");
let cardEl=document.getElementById("card-el");
let sumEl=document.querySelector("#sum-el");
// querySelector is more dynamic,# to tell that it is id,if in html we wite class instead of id then we use .sum-el.if you put body in it ,it replaces body with sum:21,so queryselector is more dynamic



//OBJECTS-store data in depth-composite/complex dtype,key:value pairs
let player = {
    name:"Priyu",
    chips:200,
    sayHello: function(){
      console.log("Heisann")
    }
   //  tags:["html","css"]
    //key:value
   //  images:["/img/castle.png","img/castle2.png"]
}
console.log( player.tags );
//or
console.log(player["chips"]);
player.sayHello();

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;

function startgame(){
   isalive=true; 
   let firstCard=getRandomCard(); 
   let secondCard=getRandomCard(); 
   cards=[firstCard,secondCard]; 
   sum=firstCard+secondCard; 
   rendergame(); 
}

function rendergame(){
 sumEl.textContent = "Sum: "+sum; 
 cardEl.textContent="Cards: " 
 for(let i=0;i<cards.length;i++){ 
   cardEl.textContent+=cards[i]+" "; 
   
 }
//  cardEl.textContent="Cards: "+cards[0]+" "+cards[1]+" ";
    if(sum<=20){
        msg="Do you want to draw a new card?";
   }
   else if(sum===21)//double = does not works if 21 was a string as it will convert 21 into number if it was number on left hand side too like 21="21" this equates to true ,so we use triple =
   {
         msg="whoa! you got blackjack";
         hasblackjack=true;
   }
   else if(sum>21){
       msg="oh! lost";
      isalive=false;
   }
//    
   msgEl.textContent=msg;
}

// let 
function newcard(){
   if(isalive===true && hasblackjack===false){
   let cardvar=getRandomCard();
   sum+=cardvar;
   cards.push(cardvar);
   rendergame();
   // console.log("Drawing new card!");
   }
}
 
//CASH OUT:
console.log(hasblackjack);
console.log(isalive);
console.log(msg);


//LOGICAL OPERATORS

let hasCompletedCourse=true;
let givesCertificate=true;

if(hasCompletedCourse===true && givesCertificate===true){
   // if(givesCertificate===true){
      generateCertificate();
   // }
}

//|| is or

function generateCertificate(){
    console.log("Generating certificate....")
}
 
//PRACTICE OBJECTS AND FUNCTIONS
let obj={
   name:"Yochan",
   age:"20",
   country:"China"
}
function logData(){
   let str=obj.name+" is"+" "+obj.age+" years old and lives in "+obj.country;
   return str;
}
console.log(logData());

//ARRAYS+LOOP
let largeCountries=["China","India","USA","Indonesia","Pakistan"];

for(let i=0;i<largeCountries.length;i+=1){

   console.log("-",largeCountries[i]);
}

//use of unshift(),shift().they are like push pop but they work in front of array unlike push pop

largeCountries.unshift("yo","go");
largeCountries.unshift("so");
console.log(largeCountries);


largeCountries.shift("yo");
largeCountries.shift("go");
largeCountries.shift("so");
console.log(largeCountries);

//ROCK PAPER SCISSORS
let hands=["rock","paper","scissor"];
function rand(){
   let ranindex=Math.floor(Math.random()*hands.length);
   return hands[ranindex];
}
console.log(rand());
