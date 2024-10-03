// Fibonatti
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

function isNumber(event) {
    const key = event.key;
    return /^[0-9]$/.test(key) || event.ctrlKey || event.altKey || key === 'Backspace' || key === 'Delete' || key === 'Enter' || key === 'Tab';
}

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

// String
function countA(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.split('a').length - 1;
}

function updateResult() {
    const input = document.getElementById('string-input').value;
    const countAValue = countA(input);
    const countNotA = input.length - countAValue;
    const resultDiv = document.getElementById('result-string');

    if (input.trim() === '') {
        resultDiv.innerHTML = 'Esperando uma string...';
    } else {
        resultDiv.innerHTML = `Quantidade de letras "a": ${countAValue} <br> Quantidade de letras não "a": ${countNotA}`;
    }
}

document.getElementById('string-input').addEventListener('input', updateResult);

// Soma
const values_order = [
    [1, 1, 2, 2, 2, 0, 2, 2, 2],   // Iteração 0 (SOMA = 1)
    [2, 2, 3, 3, 3, 2, 5, 5, 5],   // Iteração 1 (SOMA = 3)
    [3, 3, 4, 4, 4, 3, 8, 8, 8],   // Iteração 2 (SOMA = 6)
    [4, 4, 5, 5, 5, 4, 12, 12, 12], // Iteração 3 (SOMA = 10)
    [5, 5, 6, 6, 6, 5, 17, 17, 17], // Iteração 4 (SOMA = 15)
    [6, 6, 7, 7, 7, 6, 23, 23, 23], // Iteração 5 (SOMA = 21)
    [7, 7, 8, 8, 8, 7, 30, 30, 30], // Iteração 6 (SOMA = 28)
    [8, 8, 9, 9, 9, 8, 38, 38, 38], // Iteração 7 (SOMA = 36)
    [9, 9, 10, 10, 10, 9, 47, 47, 47], // Iteração 8 (SOMA = 45)
    [10, 10, 11, 11, 11, 10, 57, 57, 57], // Iteração 9 (SOMA = 55)
    [11, 11, 12, 12, 12, 11, 68, 68, 68], // Iteração 10 (SOMA = 66)
    [12, 12, 13, 13, 13, 12, 77, 77, 77]  // Iteração 11 (SOMA = 77)
];

// Função para atualizar os spans
function updateSpans(iterationIndex) {
    // Verifica se o índice é válido
    if (iterationIndex < 0 || iterationIndex >= values_order.length) {
        console.error('Índice de iteração inválido');
        return;
    }

    // Obtém o array da iteração atual
    const currentValues = values_order[iterationIndex];

    // Atualiza os spans de acordo com os valores do array
    document.getElementById('order_0').innerHTML = currentValues[0]; // K antes da iteração

    // Define um tempo para cada atualização subsequente
    setTimeout(() => {
        document.getElementById('order_1').innerHTML = currentValues[1]; // K após o incremento
    }, 700);

    setTimeout(() => {
        document.getElementById('order_2').innerHTML = currentValues[2]; // K após o incremento
    }, 1400);

    setTimeout(() => {
        document.getElementById('order_3').innerHTML = currentValues[3]; // K que é incrementado
    }, 2100);

    setTimeout(() => {
        document.getElementById('order_4').innerHTML = currentValues[4]; // SOMA antes da iteração
    }, 2800);

    setTimeout(() => {
        document.getElementById('order_5').innerHTML = currentValues[5]; // SOMA após adicionar K
    }, 3500);

    setTimeout(() => {
        document.getElementById('order_6').innerHTML = currentValues[6]; // SOMA após adicionar K
    }, 4200);

    setTimeout(() => {
        document.getElementById('order_7').innerHTML = currentValues[7]; // SOMA após adicionar K
    }, 4900);

    setTimeout(() => {
        document.getElementById('order_8').innerHTML = currentValues[8]; // Contagem de iterações
    }, 5600);
}

// Função para resetar os spans entre as iterações
function resetSpans() {
    document.getElementById('order_1').innerHTML = "K";
    document.getElementById('order_2').innerHTML = "K";
    document.getElementById('order_4').innerHTML = "K";
    document.getElementById('order_5').innerHTML = "SOMA";
    document.getElementById('order_6').innerHTML = "SOMA";
    document.getElementById('order_7').innerHTML = "SOMA";
}

// Função para rodar todas as iterações com um intervalo
function runAllIterations() {
    let i = 0;

    // Função interna para executar as iterações
    const runIteration = () => {
        if (i >= values_order.length) {
            i = 0; // Reinicia as iterações
        }

        updateSpans(i);

        // Espera 5.6 segundos para finalizar a iteração e então reseta os spans
        setTimeout(() => {
            resetSpans();
            // Espera 3 segundos após o reset antes de iniciar a próxima iteração
            setTimeout(() => {
                i++;
                runIteration();
            }, 3000); // Pausa de 3 segundos entre iterações
        }, 5600); // Tempo total das animações (5.6 segundos)
    };

    // Inicia a primeira iteração
    runIteration();
}

// Inicia a execução de todas as iterações
runAllIterations();
