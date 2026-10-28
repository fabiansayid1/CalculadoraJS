function suma() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    resultado = valor1 + valor2;
    document.getElementById('resultado').value = resultado;
    alert(resultado);
}

function resta() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    resultado = valor1 - valor2;
    document.getElementById('resultado').value = resultado;
    alert(resultado);
}

function multiplicacion() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    resultado = valor1 * valor2;
    document.getElementById('resultado').value = resultado;
    alert(resultado);
}

function division() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    resultado = valor1 / valor2;
    document.getElementById('resultado').value = resultado;
    alert(resultado);
}