#Crie um programa que leia o nome de uma pessoa e diga se ela tem “SILVA” no nome.
nome = str(input('digite seu nome: ')).strip()
#nome2 = nome[:].lower()=='silva'
print (f'Seu nome tem silva? {"silva" in nome .lower()}')