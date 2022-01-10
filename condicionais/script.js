let estaSol = true;

if(estaSol){
    console.log('vou pra praia');
} else {
    console.log('vou pro campo');
}

// let numero = 0;
// if(numero > 0){
//     console.log("Número positivo")
// } else if(numero== 0){
//     console.log("Número é zero")
// } else {
//     console.log("Número negativo")
// }

let numero = 3;
let paridade = numero % 2 == 0 ? 'par' : 'impar';
console.log(paridade)

let sinal = 'vermelho';

switch(sinal){
    case 'verde' :
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('preste a fechar, cuidado...');
        break;
    case 'vermelho' :
        console.log('fechado, não passe');
        break;
    default:
        console.log('sinal invalido');           
}