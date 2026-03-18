#FAÇA UM ALGORITIMO QUE LEIA O PREÇO DE UM PRODUTO E MOSTRE SEU NOVO PREÇO COM 5% DE DESCONTO
produto = float(input('Valor do produto: R$'))
valor = produto - (produto * 5/100)
print(f'Valor do produto com 5% de desconto: R${valor:.2f}')
