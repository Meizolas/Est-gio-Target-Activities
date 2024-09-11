let lampada1 = {ligada: false};
let lampada2 = {ligada: false};
let lampada3 = {ligada: false};

let interruptor1 = {acionado: false}; 
let interruptor2 = {acionado: false}; 
let interruptor3 = {acionado: false}; 


function Ligar(interruptor, lampada) {
    interruptor.acionado = true;
    lampada.ligada = true;
}

function Desligar(interruptor, lampada) {
    interruptor.acionado = false;
    lampada.ligada = false;
}


Ligar(interruptor1, lampada1);
Desligar(interruptor1, lampada1);

Ligar(interruptor2, lampada2);
Desligar(interruptor2, lampada2);

Ligar(interruptor3, lampada3);
Desligar(interruptor3, lampada3);


function verificar() {
    if (lampada1.acessa, interruptor1.acionado) {
        alert("Interruptor 1 controla a lâmpada 1")
    }

    if (lampada2.acessa, interruptor2.acionado) {
        alert("Interruptor 2 controla a lâmpada 2")
    }

    if (lampada3.acessa, interruptor3.acionado) {
        alert("Interruptor 3 controla a lâmpada 3")
    }
}

//Amém!!!!