const arestaBase = 29; // aresta da base da pirâmide
const alturaPiramide = Float(prompt("Digite a altura da pirâmide: ")); // ler a altura da pirâmide do usuário
const areaBase = Math.pow(arestaBase, 2); // calcula a área da base quadrada
const areaLateral = 4 * ((arestaBase * alturaPiramide) / 2); // calcula a área das 4 faces laterais
const areaTotal = areaBase + areaLateral; // calcula a área total da pirâmide
console.log(`A área da pirâmide é ${areaTotal} cm²`); // exibe o resultado na tela
