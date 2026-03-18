#Crie um programa que leia o nome completo de uma pessoa e mostre:
#– O nome com todas as letras maiúsculas e minúsculas.
#– Quantas letras ao todo (sem considerar espaços).
frase = str(input('digite um nome: ')).strip()
print ('Analizando...')
print (f'Seu nome em Minusculo é: {frase.lower()}')
print (f'Seu nome em Maiusculas é: {frase.upper()}')
print (f'Total de letras em seu nome é: {len(frase)-frase.count(' ')}')
#print (f'Seu primeiro nome tem {frase.find(' ')} letras! ')
separa = frase.split()
print (f'seu primeiro nome é {separa[0]} e tem: {len(separa[0])} Letras!')