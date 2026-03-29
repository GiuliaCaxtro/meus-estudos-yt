// vetores e arrays
// um vetor é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo
// em JavaScript, os vetores são representados por arrays
let numeros = [1, 2, 3, 4, 5];
console.log(numeros); // [1, 2, 3, 4, 5]    
// acessar elementos do vetor
console.log(numeros[0]); // 1
console.log(numeros[2]); // 3

// modificar elementos do vetor
numeros[1] = 10;
console.log(numeros); // [1, 10, 3, 4, 5]   

// .push() - adicionar elementos no fim do vetor
numeros.push(6);
console.log(numeros); // [1, 10, 3, 4, 5, 6]

// .pop() - remover elementos do fim do vetor
numeros.pop();
console.log(numeros); // [1, 10, 3, 4, 5]
    //Dá para atribuir uma variavel pra o valor removido
    let ultimoNumero = numeros.pop();
    console.log(ultimoNumero);

// .shift() - remove o primeiro elemento do vetor
numeros.shift();
console.log(numeros); // [10, 3, 4, 5]
    //Dá para atribuir uma variavel pra o valor removido 
    let primeiroNumero = numeros.shift();
    console.log(primeiroNumero); // 10

// .unshift() - adiciona um elemento no início do vetor
numeros.unshift(0);
console.log(numeros); // [0, 10, 3, 4, 5]

// .indexOf() - retorna o índice do primeiro elemento encontrado
console.log(numeros.indexOf(3)); // 2
console.log(numeros.indexOf(100)); // -1 (não encontrado)

//Array.isArray() - verifica se uma variável é um vetor
console.log(Array.isArray(10)); // false
console.log(Array.isArray("Olá")); // false 
console.log(Array.isArray(numeros)); // true

// .length - retorna o número de elementos no vetor
console.log(numeros.length); // 5

// .includes() - verifica se um elemento existe no vetor
console.log(numeros.includes(4)); // true
console.log(numeros.includes(100)); // false
// .slice() - retorna uma parte do vetor
let subVetor = numeros.slice(1, 4);
console.log(subVetor); // [10, 3, 4]
// .splice() - remove ou substitui elementos do vetor
numeros.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(numeros); // [0, 4, 5]
// .concat() - concatena dois ou mais vetores
let maisNumeros = [6, 7, 8];
let vetorConcatenado = numeros.concat(maisNumeros);
console.log(vetorConcatenado);
// [0, 4, 5, 6, 7, 8]
// .join() - junta os elementos do vetor em uma string
let stringNumeros = numeros.join(", ");
console.log(stringNumeros); // "0, 4, 5"
// .split() - divide uma string em um vetor
let string = "Olá, mundo!";