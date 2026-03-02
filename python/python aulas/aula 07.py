#nome = input('QUAL O SEU NOME?')
#print(f'PRAZER EM TE CONHERCER {nome:=^20}')
n1 = float(input('Digite um numero:'))
n2 = float (input('Digite outro valor:'))
#print (f'A soma vale:{n1+n2}')
#print (f'A divisão é:{n1/n2}')
#print (f'A multiplicação é:{n1*n2}')
#print (f'A raiz quadrada é: {n1**(1/2)})')
s = n1 + n2
m = n1 * n2
su= n1 - n2
r = n1** (1/2)
p = n2** (1/2)
print(f'A soma é: {s}'
      f'\nA multiplicação é:{m}'
      f'\nA raiz quadrada do primeiro é: {r:.3f}'
      f' e do segundo é: {p:.3f}'
      f'\nA subtracao é:{su}')

