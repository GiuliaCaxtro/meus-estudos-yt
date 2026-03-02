#Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias
# pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.
km = float(input('Quantos Km rodados?'))
dias = int(input('Quantos dias de locação?'))
v = (dias*60)+(km*0.15)
print (f'O valor total a pagar por {km} rodados é de: R${v:.2f}')