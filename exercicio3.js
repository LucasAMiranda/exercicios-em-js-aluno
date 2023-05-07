// Vetor de Listas de elementos numéricos
const vetor = [9, 7, 2, 16, 14];

// Função de pesquisa linear
pesquisa = (vet, n) => {
  for(let i = 0; i < vet.length; i++) {
    if(vet[i] === n) {
      console.log(`O valor ${n} foi encontrado na posição ${i+1} do vetor.`);
      return;
    }
  }
  console.log(`O valor ${n} não foi encontrado no vetor.`);
};

// Entrada do valor a ser pesquisado
const valor = parseInt(prompt("Digite o valor a ser pesquisado:"));

// Chamada da função de pesquisa
pesquisa(vetor, valor);
