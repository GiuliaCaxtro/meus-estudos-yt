#CRIE UM PROGRAMA QUE LEIA QUANTOS DINHEIRO UMA PESSOA TEM NA CARTEIRA E MOSTRE QUANTOS DOLARES ELA PODE COMPRAR
r =float(input('Quanto voçê tem na carteira? R$'))
dolar = r/3.27
print (f'Com R${r} voçê pode comprar US${dolar:.2f}$')