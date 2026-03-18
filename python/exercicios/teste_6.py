#crie um algritimo que leia um numero e mostre o seu dobro, triplo e sua raiz quadrada.
n1 = int(input('digite um numero:'))
#r = n1** (1/2)
#d = n1*2
#t = n1*3
print(f'O dobro de {n1} é: {n1*2}')
print(f'O triplo de {n1} é: {n1*3}')
print(f'A raiz quadrada de {n1} é: {pow(n1,(1/2)):.2f}') #ou {n1**(1/2):.2f}