#Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de
#um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa.
from math import hypot
c_opos =float(input('Digite o comprimento do cateto oposto do triângulo:'))
c_adj =float(input('Digite o comprimento do cateto adjacente do triângulo:'))
print (f'A hipotenusa de {c_opos} e {c_adj} mede em comprimento: {hypot(c_adj,c_adj):.2f}')
