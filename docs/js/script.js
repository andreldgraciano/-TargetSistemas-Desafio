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

document.getElementById('fibonacci-input').addEventListener('input', function () {
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

// loop
const values_order = [
    [1, 1, 2, 2, 2, 0, 2, 2, 2],   // Iteração 1
    [2, 2, 3, 3, 3, 2, 5, 5, 5],   // Iteração 2
    [3, 3, 4, 4, 4, 5, 9, 9, 9],   // Iteração 3
    [4, 4, 5, 5, 5, 9, 14, 14, 14], // Iteração 4
    [5, 5, 6, 6, 6, 14, 20, 20, 20], // Iteração 5
    [6, 6, 7, 7, 7, 20, 27, 27, 27], // Iteração 6
    [7, 7, 8, 8, 8, 27, 35, 35, 35], // Iteração 7
    [8, 8, 9, 9, 9, 35, 44, 44, 44], // Iteração 8
    [9, 9, 10, 10, 10, 44, 54, 54, 54], // Iteração 9
    [10, 10, 11, 11, 11, 54, 65, 65, 65], // Iteração 10
    [11, 11, 12, 12, 12, 65, 77, 77, 77], // Iteração 11
];

function updateSpans(iterationIndex) {

    if (iterationIndex < 0 || iterationIndex >= values_order.length) {
        console.error('Índice de iteração inválido');
        return;
    }

    const currentValues = values_order[iterationIndex];

    document.getElementById('order_0').innerHTML = currentValues[0];
    document.getElementById('order_0').classList.add('font-semibold');

    setTimeout(() => {
        document.getElementById('order_0').classList.remove('font-semibold');
        document.getElementById('order_1').innerHTML = currentValues[1];
        document.getElementById('order_1').classList.add('font-semibold');
    }, 700);

    setTimeout(() => {
        document.getElementById('order_1').classList.remove('font-semibold');
        document.getElementById('order_2').innerHTML = currentValues[2];
        document.getElementById('order_2').classList.add('font-semibold');
    }, 1400);

    setTimeout(() => {
        document.getElementById('order_2').classList.remove('font-semibold');
        document.getElementById('order_3').innerHTML = currentValues[3];
        document.getElementById('order_3').classList.add('font-semibold');
    }, 2100);

    setTimeout(() => {
        document.getElementById('order_3').classList.remove('font-semibold');
        document.getElementById('order_4').innerHTML = currentValues[4];
        document.getElementById('order_4').classList.add('font-semibold');
    }, 2800);

    setTimeout(() => {
        document.getElementById('order_4').classList.remove('font-semibold');
        document.getElementById('order_5').innerHTML = currentValues[5];
        document.getElementById('order_5').classList.add('font-semibold');
    }, 3500);

    setTimeout(() => {
        document.getElementById('order_5').classList.remove('font-semibold');
        document.getElementById('order_6').innerHTML = currentValues[6];
        document.getElementById('order_6').classList.add('font-semibold');
    }, 4200);

    setTimeout(() => {
        document.getElementById('order_6').classList.remove('font-semibold');
        document.getElementById('order_7').innerHTML = currentValues[7];
        document.getElementById('order_7').classList.add('font-semibold');
    }, 4900);

    setTimeout(() => {
        document.getElementById('order_7').classList.remove('font-semibold');
        document.getElementById('order_8').innerHTML = currentValues[8];
        document.getElementById('order_8').classList.add('font-semibold');
    }, 5600);
}

function resetSpans() {
    document.getElementById('order_8').classList.remove('font-semibold');
    document.getElementById('order_1').innerHTML = "K";
    document.getElementById('order_2').innerHTML = "K";
    document.getElementById('order_4').innerHTML = "K";
    document.getElementById('order_5').innerHTML = "SOMA";
    document.getElementById('order_6').innerHTML = "SOMA";
    document.getElementById('order_8').innerHTML = "SOMA";
}

function runAllIterations() {
    let i = 0;

    const runIteration = () => {
        if (i >= values_order.length) {
            i = 0;
        }

        document.getElementById('iteration').innerHTML = i + 1;

        updateSpans(i);

        setTimeout(() => {
            setTimeout(() => {
                resetSpans();
            }, 1000);

            setTimeout(() => {
                i++;
                runIteration();
            }, 2000);
        }, 5600);
    };

    setTimeout(() => {
        runIteration();
    }, 2000);

    document.getElementById('order_7').innerHTML = 0;
    document.getElementById('order_3').innerHTML = 1;
}

setTimeout(() => {
    runAllIterations();
}, 1000);

// Lógica
numbers = [
    [" 9, ..., ..., ...", " 9, 11, ..., ...", " 9, 11, 13, ...", " 9, 11, 13, 15"],
    [" 128, ..., ..., ...", " 128, 256, ..., ...", " 128, 256, 512, ...", " 128, 256, 512, 1024"],
    [" 49, ..., ..., ...", " 49, 64, ..., ...", " 49, 64, 81, ...", " 49, 64, 81, 100"],
    [" 100, ..., ..., ...", " 100, 144, ..., ...", " 100, 144, 196, ...", " 100, 144, 196, 256"],
    [" 13, ..., ..., ...", " 13, 21, ..., ...", " 13, 21, 34, ...", " 13, 21, 34, 55"],
    [" 200, ..., ..., ...", " 200, 201, ..., ...", " 200, 201, 202, ...", " 200, 201, 202, 203"],
]

function updateNumberSpans() {
    for (let x = 0; x < numbers.length; x++) {
        let numberIndex = 0;
        setInterval(() => {
            const span = document.getElementById(`seq_${x}`);
            if (span) {
                span.innerHTML = numbers[x][numberIndex];
                numberIndex++;
                if (numberIndex >= numbers[x].length) {
                    numberIndex = 0;
                }
            }
        }, 1000);
    }
}

updateNumberSpans();

// Rolagem com links
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            const elementoPos = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementoPos - 40,
                behavior: 'smooth'
            });
        }
    });
});
