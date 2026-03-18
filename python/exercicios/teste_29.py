#Escreva um programa que leia a velocidade de um carro.Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.A multa vai custar R$7,00 por cada Km acima do limite.
velocidade_atual = float(input('Qual a velocidade do carro em KM/H? '))

multa = 7 * (velocidade_atual - 80)
if velocidade_atual > 80:
    print (f'Voçê ultrapassou a velocidade permitida de 80Km/h. Valor total da sua multa é R${multa:.2f} (R$7,00 por cada Km acima do limite)')
else:
    print('Você está dentro do limite de velocidade.')