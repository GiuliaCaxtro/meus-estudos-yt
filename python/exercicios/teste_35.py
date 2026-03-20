#Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triângulo.
va_1 = int(input('Digite o primeiro valor:'))
va_2 = int(input('Digite o primeiro valor:'))
va_3 = int(input('Digite o primeiro valor:'))

if va_1 < va_2 + va_3 and va_2 < va_1 + va_3 and va_3 < va_1 + va_2:
    print('podem formar um triângulo!')
else:
    print('Não podem formar um triângulo!')

