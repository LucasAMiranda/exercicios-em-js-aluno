const vetor1 = []; // vetor da primeira lista
const vetor2 = []; // vetor da segunda lista
const resultante = []; // vetor intercalado resultante

//Listas de 30 elementos cada
for(let i = 0; i < 30; i++) {
  vetor1.push(parseInt(prompt(`Digite o ${i+1}º número da primeira lista:`)));
  vetor2.push(parseInt(prompt(`Digite o ${i+1}º número da segunda lista:`)));
}

//os vetores e armazena no vetor intercalado
for(let i = 0; i < 30; i++) {
  resultante.push(vetor1[i]);
  resultante.push(vetor2[i]);
}

// Exibe o vetor resultante intercalado
console.log(resultante);