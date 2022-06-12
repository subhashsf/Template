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

const calculate = {
    '/' : (firstNumber,secondNumber) => firstNumber / secondNumber,
    '+' : (firstNumber,secondNumber) => firstNumber + secondNumber ,
    '*' : (firstNumber,secondNumber) => firstNumber * secondNumber ,
    '-' : (firstNumber,secondNumber) => firstNumber - secondNumber ,
    '=' : (firstNumber,secondNumber) => secondNumber ,
};


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

    if(operatorValue&&awaitingNextValue) {
        operatorValue=operator.value;
        return;
    }
    if(!firstValue){
        firstValue=currentValue;
        
    }
    else{
        // console.log(firstValue,operatorValue,currentValue);
        const calculation =calculate[operatorValue](firstValue,currentValue);
        firstValue=calculation;
        caldisplay.textContent=calculation;
        // console.log(calculation);
        // console.log(firstValue,operatorValue,currentValue);
    }
    awaitingNextValue = true;
    operatorValue=operator.value;
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


