// Declarar Variável que armazena o somatório dos termos da sequência
let soma = 0;

// Função para calcular o fatorial de um número
fatorial = (num) =>{
    if(num === 0) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
}

// Loop para calcular e armazenar cada termo da sequência
for(let i = 0; i < 12; i++) {
  let numerador = 103 - (i * 3);
  let denominador = fatorial(i);
  let termo = numerador / denominador;
  soma += termo;
  console.log(`Termo ${i+1}: ${termo}`);
}

// Exibe o somatório final da sequência
console.log(`Soma: ${soma}`);


