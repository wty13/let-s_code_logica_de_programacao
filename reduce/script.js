const vetor = [1,2,3,4,5,6];

//const soma = vetor.reduce((estado,item)=>estado+item);
const soma = vetor.reduce((estado,item)=>estado*item,1);
console.log(soma);

const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,4,3]
];
const somaColuna = (estado, item)=>{
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[2]+item[2]]
};
const vetor2 = matriz.reduce(somaColuna,[0,0,0]);
console.log(vetor2);