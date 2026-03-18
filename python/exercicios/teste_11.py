#Faça um programa que leia a largura e altura de uma parede em metros, calcule a sua area e a quantidade de tinta  necessaria para pinta-la,
#sabendo que cada litro de tinta, pinta uma area de 2mQUADRADO
lar = float(input('Largura da parede: '))
alt = float(input('Altura da parede: '))
area = lar * alt
tinta = area/2
print (f'Sua parede tem a dimenção de {lar}x{alt} e sua área é de {area:.1f}m².')
print (f'para pintar sua parede, voce precisa de {tinta:.1f}L de tinta.\nPara duas demãos {tinta*2}L de tinta.')
