//exemplo de concatenação de string
let primeiroNome = "Giulia";
let ultimoNome = "Silva";

console.log(primeiroNome + " " + ultimoNome); //Giulia Silva

//Aqui está um exemplo onde está faltando um espaço: ' '
console.log(primeiroNome + ultimoNome); //GiuliaCastro

//exemplo de concatenar uma string a outra usando o operador +=
let saldacao = "Olá";
saldacao += ", Giulia";
console.log(saldacao); //Olá Giulia

//exemplo de concatenar uma string a outra usando o concat()
let str1 = "Giulia";
let str2 = "Castro";
let resultado = str1.concat(" ",str2);
console.log(resultado); //Giulia Castro
