// Usamos DOMContentLoaded que es más eficiente, se ejecuta en cuanto el HTML está listo.
document.addEventListener('DOMContentLoaded', function () {

    // 1. Obtenemos una referencia al ELEMENTO del display, no a su texto.
    const display = document.getElementById("display");
    // 2. Seleccionamos el contenedor de la calculadora para escuchar los clics.
    const calculator = document.querySelector('.calculator');
    let num1 = null, num2 = null, num2ToParse = '', operator = null;
    // 3. Usamos un solo event listener en el contenedor.
    calculator.addEventListener('click', function (event) {
        // Nos aseguramos de que el clic fue en un BOTÓN.
        if (!event.target.matches('button')) {
            return;
        }

        const button = event.target;
        const buttonValue = button.innerText;
        const currentDisplayValue = display.innerText;

        if (button.classList.contains('equal')) {
            num2 = parseFloat(num2ToParse);
            switch (operator) {
                case '+':
                    display.innerText = num1 + num2;
                    break;
                case '-':
                    display.innerText = num1 - num2;
                    break;
                case '*':
                    display.innerText = num1 * num2;
                    break;
                case '/':
                    display.innerText = num1 / num2;
                    break;
            }
            num1 = null;
            num2 = null;
            num2ToParse = '';
            operator = null;
            return;
        }

        if (button.classList.contains('operator') && num1 == null) {
            num1 = parseFloat(currentDisplayValue);
            display.innerText += buttonValue;

            operator = buttonValue;
            return;
        }

        // Lógica para el botón de limpiar (Clear)
        if (button.classList.contains('clear')) {
            display.innerText = '0';
        }

        // Lógica para los botones de números
        if (button.classList.contains('number')) {
            if (num1 !== null) {
                num2ToParse += buttonValue;
            }

            if (currentDisplayValue === '0') {
                display.innerText = buttonValue;
            } else {
                // Si no, añadimos el nuevo número.
                display.innerText += buttonValue;
            }
        }
    });
});