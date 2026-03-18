#Crie um programa que leia um número Real qualquer pelo teclado e mostre na tela a sua porção Inteira.
#import math
#num = float(input ('Digite um numero:'))
#valor = math.trunc(num)
#print(f'O valor digitado foi {num} e a sua porção Inteira é: {valor}')
from math import trunc
num = float(input('Digite um numero:'))
print(f'O valor digitado foi {num} e a sua porção inteira é: {trunc(num)}')