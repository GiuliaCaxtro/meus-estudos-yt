                                     //Operadores em JavaScript
//------------------------------------------------------------------------------------------------------------------
//Operadores aritméticos

+ //adição
exemplo;console.log(2 + 3); // Output: 5

- //subtração 
exemplo; console.log(5 - 2); // Output: 3

* //multiplicação 
exemplo; console.log(2 * 3); // Output: 6

/ //divisão 
exemplo; console.log(10 / 2); // Output: 5

% //módulo (resto da divisão) 
exemplo; console.log(10 % 3); // Output: 1

** //exponenciação 
exemplo; console.log(2 ** 3); // Output: 8 (2 elevado à potência de 3)

//------------------------------------------------------------------------------------------------------------------

//operadores relacionais E comparativos
// são usados para comparar valores e retornar um valor booleano (true ou false) com base na comparação. 
// Eles incluem:
//1. Igualdade (==) e Igualdade Estrita (===)
//2. Diferença (!=) e Diferença Estrita (!==)
//3. Maior que (>)
//4. Menor que (<)
//5. Maior ou igual a (>=)
//6. Menor ou igual a (<=)

==  //igualdade (com conversão de tipo)
exemplo; console.log(5 == 5); // Output: true

=== //igualdade estrita (sem conversão de tipo)
exemplo; console.log(5 === 5); // Output: true

!=  //diferença (com conversão de tipo)
exemplo; console.log(5 != '5'); // Output: false

!== //diferença estrita (sem conversão de tipo)
exemplo; console.log(5 !== '5'); // Output: true

>   //maior que
exemplo; console.log(5 > 2); // Output: true

<   //menor que
exemplo; console.log(2 < 5); // Output: true

>=  //maior ou igual a
exemplo; console.log(5 >= 5); // Output: true

<=  //menor ou igual a
exemplo; console.log(2 <= 5); // Output: true

//------------------------------------------------------------------------------------------------------------------

//Operadores lógicos

&&  // E lógico, QUANDO AMBOS OS OPERANDOS SÃO VERDADEIROS, O RESULTADO É VERDADEIRO, CASO CONTRÁRIO, O RESULTADO É FALSO.
exemplo; console.log(true && true); // Output: true

||  // OU lógico QUANDO PELO MENOS UM DOS OPERANDOS É VERDADEIRO, O RESULTADO É VERDADEIRO, CASO CONTRÁRIO, O RESULTADO É FALSO.
exemplo; console.log(true || false); // Output: true

!   // NÃO lógico QUANDO O OPERANDO É VERDADEIRO, O RESULTADO É FALSO, E QUANDO O OPERANDO É FALSO, O RESULTADO É VERDADEIRO.
exemplo; console.log(!true); // Output: false

//------------------------------------------------------------------------------------------------------------------

//Operadores de atribuição

//atribuição simples = 
exemplo; let x = 5; // A variável x recebe o valor 5

+=  //adição e atribuição
exemplo; let y = 10; y += 5; // A variável y agora tem o valor 15 (10 + 5)

-=  //subtração e atribuição
exemplo; let z = 20; z -= 5; // A variável z agora tem o valor 15 (20 - 5)

*=  //multiplicação e atribuição
exemplo; let a = 4; a *= 3; // A variável a agora tem o valor 12 (4 * 3)

/=  //divisão e atribuição
exemplo; let b = 10; b /= 2; // A variável b agora tem o valor 5 (10 / 2)

%=  //módulo e atribuição
exemplo; let c = 10; c %= 3; // A variável c agora tem o valor 1 (10 % 3)

**= //exponenciação e atribuição
exemplo; let d = 2; d **= 3; // A variável d agora tem o valor 8 (2 elevado à potência de 3)

//auto-incremento e auto-decremento
exemplo; 
let e = 5; e++;
console.log(e); // Output: 6 (e foi incrementado em 1)

exemplo; 
let f = 5; f--;
console.log(f); // Output: 4 (f foi decrementado em 1) 

//------------------------------------------------------------------------------------------------------------------
//OPERADORES TERNÁRIOS
// O operador ternário é uma forma concisa de escrever uma expressão condicional. Ele tem a seguinte sintaxe:
condição ? expressão1 : expressão2 // Se a condição for verdadeira, a expressão1 será avaliada e retornada; caso contrário, a expressão2 será avaliada e retornada.
? //significa "se" e é usado para separar a condição da expressão que será avaliada se a condição for verdadeira.
: //significa "senão" e é usado para separar a expressão que será avaliada se a condição for verdadeira da expressão que será avaliada se a condição for falsa.
exemplo;
let idade = 18;
let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem); // Output: "Você é maior de idade."

//------------------------------------------------------------------------------------------------------------------

//ordem de precedência dos operadores em JavaScript
//1. Parênteses ()
//2. Exponenciação **
//3. Multiplicação *, Divisão / e Módulo %
//4. Adição + e Subtração -
//5. Operadores de comparação (==, ===, !=, !==, >, <, >=, <=)
//6. Operadores lógicos (&&, ||, !)
//7. Operadores de atribuição (=, +=, -=, *=, /=, %=, **=)
//8. Outros operadores (typeof, delete, void)
