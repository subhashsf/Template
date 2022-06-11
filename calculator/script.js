const caldisplay= document.querySelector('h1');
const buttons =document.querySelectorAll('button');
const clearbtn =document.getElementById('clear-btn');
// console.log(caldisplay,buttons,clearbtn,equalbtn);

function displaynum(disvar){
    console.log(disvar.value);
    caldisplay.textContent =caldisplay.textContent== 0 ?  disvar.value : caldisplay.textContent+disvar.value;
    // console.log(displayvalue);
}
function displaydecimal(disvar){
    if(caldisplay.textContent.includes('.')){

    }
    else{
        displaynum(disvar);
    }
}

buttons.forEach((eachBtn)=>{
    if(eachBtn.classList.length === 0)
    {
        eachBtn.addEventListener('click',() => displaynum(eachBtn));
    }
    else if(eachBtn.classList.contains('operator')){
        eachBtn.addEventListener('click',() => displaynum(eachBtn));
    }
    else if(eachBtn.classList.contains('decimal')){
        eachBtn.addEventListener('click',() => displaydecimal(eachBtn));
    }
})

function resetAll(){
    caldisplay.textContent='0';
}
clearbtn.addEventListener('click',resetAll);

// function calculate(){
//     console.log("dfasd");
// }
// equalbtn.addEventListener('click',calculate);
