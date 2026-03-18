#Desenvolva um programa que pergunte a distância de uma viagem em Km.Calcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200Km e R$0,45 para viagens mais longas.

distancia_viagem = float(input('Qual a distância da viagem em Km? '))

passagem_perto = 0.50 * distancia_viagem 
passagem_longe = 0.45 * distancia_viagem

if distancia_viagem <= 200:
    print(f'O valor da passagem é R${passagem_perto}')
else:
    print(f'O valor da passagem é R${passagem_longe}')
