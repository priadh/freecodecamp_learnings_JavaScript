// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let err=document.getElementById("error");

function errmsg(){
    let msg="Something went wrong, please try again";
    err.innerText=msg;
}
