#Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
#O programa deverá escrever na tela se o usuário venceu ou perdeu.
import random
print("Vou pensar em um numero de 0 a 5, tente adivinhar qual é!")
numero = random.randint(0,5)
escolha = int(input("Escolha um número: "))
if numero == escolha:
    print("Parabéns voçê venceu!")
else:
    print(f'Infelizmente voçê perdeu! O numero era {numero}!')