const caldisplay= document.querySelector('h1');
const buttons =document.querySelectorAll('button');
const clearbtn =document.getElementById('clear-btn');
// console.log(caldisplay,buttons,clearbtn,equalbtn);
let firstValue = 0;
let operatorValue = 0;
let awaitingNextValue = false;

function displaynum(disvar){

    // // console.log(displayvalue);
    if(awaitingNextValue){
        caldisplay.textContent=disvar.value;
        awaitingNextValue=false;
    }
    else{
        caldisplay.textContent =caldisplay.textContent== 0 ?  disvar.value : caldisplay.textContent+disvar.value;
    }
}
function displaydecimal(disvar){

    if(awaitingNextValue) return;

    if(caldisplay.textContent.includes('.')){

    }
    else{
        displaynum(disvar);
    }
}


function useOperator(operator){
    const currentValue =Number(caldisplay.textContent);
    
    if(!firstValue){
        firstValue=currentValue;
    }
    else{
        console.log(firstValue,operatorValue,currentValue);
    }
    awaitingNextValue = true;
    operatorValue=operator.value;
    console.log(firstValue,operatorValue);
}

buttons.forEach((eachBtn)=>{
    
    if(eachBtn.classList.length === 0)
    {
        eachBtn.addEventListener('click',() => displaynum(eachBtn));
    }
    else if(eachBtn.classList.contains('operator')){
        eachBtn.addEventListener('click',() => useOperator(eachBtn));
    }
    else if(eachBtn.classList.contains('decimal')){
        eachBtn.addEventListener('click',() => displaydecimal(eachBtn));
    }
})

function resetAll(){
     firstValue = 0;
     operatorValue = 0;
     awaitingNextValue = false;
    caldisplay.textContent='0';
}
clearbtn.addEventListener('click',resetAll);

// function calculate(){
//     console.log("dfasd");
// }
// equalbtn.addEventListener('click',calculate);
