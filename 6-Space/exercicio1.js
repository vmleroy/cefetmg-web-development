// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const onCalculate = () => {
    const G = parseFloat(document.getElementById('constante').value);
    const m1 = parseFloat(document.getElementById('massa1').value);
    const m2 = parseFloat(document.getElementById('massa2').value);
    const d = parseFloat(document.getElementById('distancia').value);
    const result = G * ((m1 * m2) / Math.pow(d, 2));
    document.getElementById('resultado').value = result;
}

document.getElementById('calcular').addEventListener('click', onCalculate);