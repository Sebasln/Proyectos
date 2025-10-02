document.addEventListener('DOMContentLoaded', function () {

    const display = document.getElementById("display");
    const calculator = document.querySelector('.calculator');
    let num1 = null, operator = null, shouldResetDisplay = false;

    calculator.addEventListener('click', function (event) {

        if (!event.target.matches('button')) {
            return;
        }

        const button = event.target;
        const buttonValue = button.innerText;
        const currentDisplayValue = display.innerText;

        if (button.classList.contains('number')) {
            if (currentDisplayValue === '0' || shouldResetDisplay) {
                display.innerText = buttonValue;
                shouldResetDisplay = false;
            } else {
                // Evitar múltiples puntos decimales
                if (buttonValue === '.' && currentDisplayValue.includes('.')) {
                    return;
                }
                display.innerText += buttonValue;
            }
        }

        if (button.classList.contains('operator')) {
            if (operator && !shouldResetDisplay) {
                const num2 = parseFloat(currentDisplayValue);
                num1 = calculate(num1, operator, num2);
                display.innerText = num1;
            } else {
                num1 = parseFloat(currentDisplayValue);
            }

            operator = buttonValue;
            shouldResetDisplay = true;
        }

        if (button.classList.contains('delete')) {
            if (display.innerText.length === 1 || shouldResetDisplay) {
                display.innerText = '0';
                shouldResetDisplay = false;
            } else {
                display.innerText = display.innerText.slice(0, -1).trim();
            }
        }

        if (button.classList.contains('equal') && operator) {
            if (shouldResetDisplay) return;
            const num2 = parseFloat(currentDisplayValue);
            const result = calculate(num1, operator, num2);
            display.innerText = result;
            num1 = result;
            operator = null;
            shouldResetDisplay = true;
        }

        if (button.classList.contains('clear')) {
            display.innerText = '0';
            num1 = null;
            operator = null;
            shouldResetDisplay = false;
        }
    });

    function calculate(n1, op, n2) {
        switch (operator) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
            case '/': return n2 === 0 ? 'Error. Please Clear' : n1 / n2;
            default: return n2;
        }
    }
});