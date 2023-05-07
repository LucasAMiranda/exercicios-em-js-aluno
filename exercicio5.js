// Função para ordenar um vetor utilizando o algoritmo Bubble Sort
const bubbleSort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          // Troca os elementos de posição
          [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
        }
      }
    }
  };
  
  // Ler 17 números do teclado e armazena em um vetor
  const vetor = [];
  for (let i = 0; i < 17; i++) {
    vetor.push(parseInt(prompt(`Digite o ${i+1}º número:`)));
  }
  
  // Ordena o vetor utilizando Bubble Sort
  bubbleSort(vetor);
  
  // Exibe o vetor ordenado de frente para trás
  console.log("Vetor ordenado de frente para trás:");
  console.log(vetor);
  
  // Exibe o vetor ordenado de trás para frente
  console.log("Vetor ordenado de trás para frente:");
  console.log(vetor.reverse());
  