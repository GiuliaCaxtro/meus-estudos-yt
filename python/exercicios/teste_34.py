#Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.Para salários superiores a R$1.250,00, calcule um aumento de 10%.Para os inferiores ou iguais, o aumento é de 15%.
salario = float(input('Digite o valor do salario atual: R$'))

if (salario > 1250):
    aumento_10 = salario * 1.10
    print(f'Valor do seu salario com aumento de 10% é R${aumento_10:.2f}')
elif (salario <= 1250):
    aumento_15 = salario * 1.15
    print(f'Valor do seu salario com aumento de 15% é R${aumento_15:.2f}')
