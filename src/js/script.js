function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === a || num === b) return true;

    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

// Adiciona um event listener ao input
document.getElementById('fibonacci-input').addEventListener('input', function() {
    const input = this.value;
    const num = parseInt(input);

    const resultDiv = document.getElementById('result-fibonacci');
    if (isNaN(num)) {
        resultDiv.innerHTML = 'Por favor, insira um número válido.';
    } else {
        if (isFibonacci(num)) {
            resultDiv.innerHTML = `${num} pertence à sequência de Fibonacci.`;
        } else {
            resultDiv.innerHTML = `${num} não pertence à sequência de Fibonacci.`;
        }
    }
});