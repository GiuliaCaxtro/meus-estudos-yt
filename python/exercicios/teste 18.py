#Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo
from math import cos, sin, tan , radians
angulo = float(input('Digite o angulo que voçê deseja: '))
print (f'O seno é:{sin(radians(angulo)):.2f}')
print (f'O cosseno é:{cos(radians(angulo)):.2f}')
print (f'A tangente é: {tan(radians(angulo)):.2f}')
