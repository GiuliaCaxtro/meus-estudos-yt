#Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separados.
numeros = int(input('Digite um numero: '))
u = numeros//1%10
d = numeros//10%10
c = numeros//100%10
m = numeros//1000%10
print (f'Analisando o nmumero : {numeros}')
print (f'Unidade: {u}')
print(f'Dezenas: {d} ')
print(f'Centenas: {c}')
print(f'Milhar: {m}')