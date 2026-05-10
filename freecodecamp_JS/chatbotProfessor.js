console.log("Ola!");

const nomeDoBot = "professorBot";

const saudacao = `Meu nome e ${nomeDoBot}.`;
console.log(saudacao);

const assunto = "JavaScript";
const topico = "strings";

const frase = `Hoje, voce vai aprender sobre ${topico} em ${assunto}.`;
console.log(frase);

const introducaoComprimentoString = `Aqui esta um exemplo de uso da propriedade length na palavra ${assunto}.`;
console.log(introducaoComprimentoString);

console.log(assunto.length);

console.log(`Aqui esta um exemplo de uso da propriedade length na palavra ${topico}.`);
console.log(topico.length);

console.log(`Aqui esta um exemplo de acesso a primeira letra da palavra ${assunto}.`);

console.log(assunto[0]);

console.log(`Aqui esta um exemplo de acesso a segunda letra da palavra ${assunto}.`);
console.log(assunto[1]);

console.log(`Aqui esta um exemplo de acesso a ultima letra da palavra ${assunto}.`);

const ultimoCaractere = assunto[assunto.length - 1];
console.log(ultimoCaractere);

const fraseAprenderEDivertido = "Aprender e divertido.";

console.log("Aqui estao exemplos de como encontrar as posicoes de substrings na frase.");

console.log(fraseAprenderEDivertido.indexOf("Aprender"));

console.log(fraseAprenderEDivertido.indexOf("divertido"));
console.log(fraseAprenderEDivertido.indexOf("aprender"));

console.log("Espero que voce tenha gostado de aprender hoje.");
