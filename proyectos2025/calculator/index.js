var buttonValue = "pinga", displayValue = "", num1 = 0, num2 = 0, operator = "";

function getValue(event){
    buttonValue = event.target.innerText;
    if(operator == "="){
        displayValue = "";
        operator = "";
        calculateResult(num1,num2,operator);
        return;
    }
    if(operator == "+" || "-" || "*" || "/"){
        num1 = parseInt(displayValue);
        operator = buttonValue;
        return;
    }
    displayValue += buttonValue;
    document.getElementById("display").innerText = displayValue;
}

