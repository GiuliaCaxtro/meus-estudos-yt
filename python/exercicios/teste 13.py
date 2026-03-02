#Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento.
salário = float(input('Qual salario do funccionario? R$'))
novo = salário +(salário*15/100)
print (f'Novo salário com 15% de aumento: R${novo :.2f}')
