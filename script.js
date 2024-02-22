function calcularNotas() {
    // Obter valores das notas
    const notaA = parseFloat(document.getElementById("notaA").value);
    const notaB = parseFloat(document.getElementById("notaB").value);

    // Calcular resultados
    var resultado = (notaA * 0.3) + (notaB * 0.7);
    var faltaPara6 = 6 - resultado;

    // Exibir resultados
    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);

    if (resultado >= 6) {
        document.getElementById("faltaPara6").innerText = "Falta para 6: Você está aprovado!";
    } else {
        var faltaPara6 = 6 - resultado;
        document.getElementById("faltaPara6").innerText = "Falta para 6: " + faltaPara6.toFixed(2);
    }
    
}