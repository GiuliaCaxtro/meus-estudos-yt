#Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra “A”,
# em que posição ela aparece a primeira vez e em que posição ela aparece a última vez.
f = str(input('Digite uma frase: ')).strip().upper()
print (f'Na frase acima contém {f.count('A')} letra A.')
print (f'Posição que ela aparece a primeira vez: {f.find('A')+1}')
print (f'Posição que ela aparece a ultima vez: {f.rfind ('A')+1}')