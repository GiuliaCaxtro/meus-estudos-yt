#Faça um programa que leia três números e mostre qual é o maior e qual é o menor.
numero1 = float(input('Digite um numero: '))
numero2 = float(input('Digite outro numero: '))
numero3 = float(input('Digite mais um numero: '))

if numero1<numero2 and numero1<numero3:
    print(f"O menor valor é {numero1}")
elif numero2<numero1 and numero2<numero3:
    print(f"O menor valor é {numero2}")
elif numero3<numero1 and numero3<numero1:
    print(f"O menor valor é {numero3}")
if numero1>numero2 and numero1>numero3:
    print(f"O maior valor é {numero1}")
elif numero2>numero1 and numero2>numero3:
    print(f"O maior valor é {numero2}")
elif numero3>numero1 and numero3>numero1:
    print(f"O maior valor é {numero3}")
