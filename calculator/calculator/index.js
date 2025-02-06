var numero1 = '';
var operador = '';
var numero2 = '';
function onClickGenericBtn(event) {

  guardarValores(event.target.innerText);

  document.getElementById("textSpace").innerText = numero1 + operador + numero2;

}
function guardarValores(texto) {
  if (texto === "=") {
    operation();
    return;
  }

  if (texto === "C") {
    numero1 = "";
    operador = "";
    numero2 = "";
    return;
  }

  if (
    texto === "+"
    || texto === "-"
    || texto === "/"
    || texto === "*"
  ) {
    operador = texto;
    return;
  }

  if (operador) {

    numero2 = numero2 + texto;
    return;
  }

  numero1 = numero1 + texto;
}
function operation() {


  switch (operador) {
    case '+':
      numero1 = new Number(numero1) + new Number(numero2);
      operador = "";
      numero2 = "";
      return;
    case '-':
      numero1 = new Number(numero1) - new Number(numero2);
      operador = "";
      numero2 = "";
      return;
    case '*':
      numero1 = new Number(numero1) * new Number(numero2);
      operador = "";
      numero2 = "";
      return;
    case '/':
      numero1 = new Number(numero1) / new Number(numero2);
      operador = "";
      numero2 = "";
      return;

  }
  // if (operador === "+") {
  //   numero1 = new Number(numero1) + new Number(numero2);
  //   operador = "";
  //   numero2 = "";
  //   return;
  // }
  // if (operador === "-") {
  //   numero1 = new Number(numero1) - new Number(numero2);
  //   operador = "";
  //   numero2 = "";
  //   return;
  // }
  // if (operador === "*") {
  //   numero1 = new Number(numero1) * new Number(numero2);
  //   operador = "";
  //   numero2 = "";
  //   return;
  // }
  // if (operador === "/") {
  //   numero1 = new Number(numero1) / new Number(numero2);
  //   operador = "";
  //   numero2 = "";
  //   return;
  // }
}