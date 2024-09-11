function LetraA(string) {
    let contador = 0; 
    
    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === 'a' || string[i] === 'A') {
            contador++;
        }
    }

    if (contador > 0) {
        alert.prompt(`A letra 'a' apareceu ${contador} vezes na string`);
    } else {
        alert.prompt("A letra 'a' não foi encontrada na string");
    }
}


let texto = userInput = window.prompt("Digite uma frase")
LetraA(texto);
