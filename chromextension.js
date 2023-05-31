// function buttonClick(){
//     console.log("button clicked from attribute");
// }
// buttonClick();

//ADD ACTION LISTENER-now you can remove onclick from html
const inputBtn=document.getElementById("input-btn");
let myLeads=[];
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");
const tabbtn=document.getElementById("tab-btn");
//const and let both are used to declare variables,const does not allow reassignment but let allows so,use let only where you can't use const.use const mostly

// myLeads=JSON.parse(myLeads);
// myLeads.push("www.lead2.com");
// myLeads=JSON.stringify(myLeads);
// console.log(typeof myLeads);

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("myName","Priyu");
let name1=localStorage.getItem("myName");
console.log(name1);
localStorage.clear();
const deletebtn=document.getElementById("delete-btn");

const leadsfromstorage=JSON.parse(localStorage.getItem("myLeads"));

if(leadsfromstorage){
    myLeads=leadsfromstorage;
    render(myLeads);
}

// const tabs=[
//     {url:"https://www.google.com/search?q=no+brainer+meaning&rlz=1C1CHBF_enIN1030IN1030&oq=&aqs=chrome.1.35i39i362l5j46i39i362l2j35i39i362.1015452j0j7&sourceid=chrome&ie=UTF-8"}
// ]

tabbtn.addEventListener("click",function(){
      chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
        // let activeTab=tabs[0];
        // let activeTabId=activeTab.id;
      })//gets current tab url
    
})

deletebtn.addEventListener("dblclick",function(){
    console.log("double click");
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
 
    // ulEl.textContent+=inputEl.value+" ";
     inputEl.value="";
     localStorage.setItem("myLeads",JSON.stringify(myLeads));

     render(myLeads);
     
     
});

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field>

console.log(myLeads);

for(let c=0;c<myLeads.length;c++){
    ulEl.innerHTML+="<li>"+myLeads[i]+" "+"</li>";
    //or
//    const li= document.createElement("li");
//    li.textContent=myLeads[i];
//    ulEl.append(li);
}

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        // listItems+="<li><a target='_blank' href='"+ myLeads[i]+"'>"+myLeads[i]+"</a></li>";
        //or TEMPLATE STRINGS
        listItems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
        //this is backtick
    }
    ulEl.innerHTML=listItems;
}

//TEMPLATE STRING
const recipient="James";
const sender="Per Herald Borgan"
const email=`Hey ${recipient}! How is it going? Cheers ${sender}` 
console.log(email)

//TRUTHY AND FALSY
let credits=12;
if(credits){
    console.log("let's play")
}
else{
    console.log("no credits");
}
let currentviewers=null;
currentviewers=["nick","jane"];//empty array evaluates to true
currentviewers=null;//falsy value
if(currentviewers){
    console.log("have viewers")
} 

let truthorfalse=Boolean("hello");
console.log(truthorfalse);
console.log(Boolean(""));//false-empty string
console.log(Boolean("0"))//true
console.log(100);//true


//greeting name are parameters
function greetUser(greeting,name){
    //  console.log(greeting+","+name);
    let str1=`${greeting},${name}`;
    console.log(str1);
}
greetUser("welcome","yuo");//arguments,(remember by:take your arguments outside!!!!)
//can also pass emoji

function firstitem([]){
    return(arr[0]);
}
let arr=[1,2,3];
console.log(firstitem(arr));
