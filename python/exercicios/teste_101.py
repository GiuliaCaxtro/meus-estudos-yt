#banana = 1.85
#maca = 2.30
#laranja = 3.60
print('1-Banana R$1.85')
print('2-Maça R$2.30')
print('3-Laranja R$3.60')
escolha = int(input('Escolha qual fruta voçê deseja: '))
quantos = int(input('Quantas unidades voçê deseja? '))

if (escolha == 1):
    total = quantos * 1.85
    print(f'Voçê escolheu {quantos} Bananas, o valor total a pagar é {total:.2f}')
elif (escolha == 2):
    total = quantos * 2.30
    print(f'Voçê escolheu {quantos} Maçãs, o valor total a pagar é {total:.2f}')
elif (escolha == 3):
    total = quantos * 3.60
    print(f'Voçê escolheu {quantos} Laranjas, o valor total a pagar é {total:.2f}')
else:
    print('Produto inexistente!')