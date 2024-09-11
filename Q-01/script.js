/* Deixei separado em 3 funções, pois achei assim mais facil e mais organizado. A primeira função 
gera a sequência, a segunda verifica se o número digitado pelo usuário faz parte da sequência e a 
ultima função, vai fazer a intermediação */

function Fibonacci(n) {
    let sequencia = [0, 1]; 
    let proximo = 1; 

    while (proximo <= n) {
        sequencia.push(proximo); //ainda estou aprendendo a utilizar o .push, por enquanto ta tudo tranquilo//
        proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]; 
    }
    
    return sequencia; 
}


function VerificarFibo(number, sequencia) {
    return sequencia.includes(number); 
}


function Intermed() {
    let userInput = window.prompt("Digite um número para verificar se ele está na sequência de Fibonacci:"); 
    let number = parseInt(userInput); 

    if (isNaN(number)) {
        alert("Por favor, digite um número válido!"); 
        return;
    }

   
    let sequencia = Fibonacci(number);

    
    if (VerificarFibo(number, sequencia)) {
        alert(`${number} pertence à sequência de Fibonacci.`);
    } else {
        alert(`${number} não pertence à sequência de Fibonacci.`);
    }
}


Intermed();
