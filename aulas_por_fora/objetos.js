//objetos e classes
// um objeto é uma coleção de propriedades e métodos relacionados
// em JavaScript, os objetos são criados usando chaves {}
const nome = "Giulia";
const idade = 28;
const enderecoRua = "Rua A";
const enderecoCidade = "São Paulo";
const enderecoEstado = "SP";
const trabalho = "Desenvolvedor";
const passatempo = ["futebol", "música", "viagens"];
console.log(nome); // "Giulia"
console.log(idade); // 28
console.log(enderecoRua); // "Rua A"
console.log(enderecoCidade); // "São Paulo"
console.log(enderecoEstado); // "SP"
console.log(trabalho); // "Desenvolvedor"
console.log(passatempo); // ["futebol", "música", "viagens"]

//--------------------------------------------------
// para organizar melhor os dados relacionados, podemos usar objetos

const pessoa = {
    nome: "Giulia",
    idade: 28,
    trabalho: "Desenvolvedor",
    passatempo: ["futebol", "música", "viagens"],

    endereco: {
        rua: "Rua A",
        cidade: "São Paulo",
        estado: "SP",
    }
}
console.log(pessoa); // { nome: "Giulia", idade: 28, trabalho: "Desenvolvedor" }

// acessar propriedades do objeto
console.log(pessoa.nome); // "Giulia"
console.log(pessoa.idade); // 28
console.log(pessoa.trabalho); // "Desenvolvedor"
console.log(pessoa.passatempo); // ["futebol", "música", "viagens"]
console.log(pessoa.endereco); // { rua: "Rua A", cidade: "São Paulo", estado: "SP" }
    // acessar propriedades aninhadas
    console.log(pessoa.endereco.cidade); // "São Paulo"

// modificar propriedades do objeto
pessoa.idade = 29;
console.log(pessoa.idade); // 29
pessoa.endereco.rua = "Rua B";
console.log(pessoa.endereco.rua); // "Rua B"

// acessar propriedades usando colchetes
console.log(pessoa["nome"]); // "Giulia"
console.log(pessoa["endereco"]["estado"]); // "SP"

// adicionar novas propriedades ao objeto com ponto
pessoa.email = "giulia@email.com";
console.log(pessoa.email); // "giulia@email.com"  // vai adicionar a propriedade email ao objeto pessoa e fica asim: {  nome: "Giulia", idade: 29, trabalho: "Desenvolvedor", passatempo: ["futebol", "música", "viagens"], endereco: { rua: "Rua B", cidade: "São Paulo", estado: "SP" }, email: "giulia@email.com" }
// adicionar novas propriedades usando colchetes
pessoa["telefone"] = "123456789";
console.log(pessoa.telefone); // "123456789" //igual o exmplo do email, só que usando colchetes, e fica asim: { nome: "Giulia", idade: 29, trabalho: "Desenvolvedor", passatempo: ["futebol", "música", "viagens"], endereco: { rua: "Rua B", cidade: "São Paulo", estado: "SP" }, email: "giulia@email.com", telefone: "123456789" }
// deletar propriedades do objeto
delete pessoa.trabalho;
console.log(pessoa.trabalho); // undefined

