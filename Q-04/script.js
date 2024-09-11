//demorei mais pra descobrir qual era a sequência do que pra construir o código em si 

function questaoA() {
    let num = [1, 3, 5, 7];
    let proximoNum = num[num.length - 1] + 2; 
    num.push(proximoNum); 
    return num;
}


function questaoB() {
    let num = [2, 4, 8, 16, 32, 64];
    let proximoNum = num[num.length - 1] * 2;
    num.push(proximoNum);
    return num;
}


function questaoC() {
    let num = [0, 1, 4, 9, 16, 25, 36];
    let proximoNum = Math.pow(num.length, 2);
    num.push(proximoNum);
    return num;
}


function questaoD() {
    let num = [4, 16, 36, 64];
    let proximoNum = Math.pow((num.length + 1) * 2, 2);
    num.push(proximoNum);
    return num;
}


function questaoE() {
    let num = [1, 1, 2, 3, 5, 8];
    let proximoNum = num[num.length - 1] + num[num.length - 2];
    num.push(proximoNum);
    return num;
}


function questaoF() {
    let num = [2, 10, 12, 16, 17, 18, 19];
    let proximoNum = 20;
    num.push(proximoNum);
    return num;
}


window.prompt("Sequência A:", questaoA());
window.prompt("Sequência B:", questaoB());
window.prompt("Sequência C:", questaoC());
window.prompt("Sequência D:", questaoD());
window.prompt("Sequência E:", questaoE());
window.prompt("Sequência F:", questaoF());
