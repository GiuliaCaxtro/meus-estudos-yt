const fraseFCC = "freeCodeCamp e um otimo lugar para aprender desenvolvimento web.";

console.log("Aqui estao alguns exemplos do metodo includes():");

const temFreeCodeCamp = fraseFCC.includes("freeCodeCamp");
console.log(`fraseFCC.includes("freeCodeCamp") retorna ${temFreeCodeCamp} porque a palavra "freeCodeCamp" esta na frase.`);

const temJavaScript = fraseFCC.includes("JavaScript");
console.log(`fraseFCC.includes("JavaScript") retorna ${temJavaScript} porque a palavra "JavaScript" nao esta na frase.`);

const temFCCMinusculo = fraseFCC.includes("freecodecamp");
console.log(`fraseFCC.includes("freecodecamp") retorna ${temFCCMinusculo} porque includes diferencia letras maiusculas de minusculas.`);

const mensagem = "Bem-vindo ao freeCodeCamp!";

console.log("Aqui estao alguns exemplos do metodo slice():");

const plataforma = mensagem.slice(13, 25);
console.log(`A palavra "${plataforma}" foi recortada da mensagem.`);

const palavraDeSaudacao = mensagem.slice(0, 9);
console.log(`A primeira palavra e "${palavraDeSaudacao}".`);

const pontuacaoFinal = mensagem.slice(-1);
console.log(`O sinal de pontuacao final e "${pontuacaoFinal}"`);

console.log("Workshop concluido! Agora voce sabe como usar includes() e slice().");
