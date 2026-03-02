#O mesmo professor do desafio 19 quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa
# que leia o nome dos quatro alunos e mostre a ordem sorteada.
import random
nome1 = str(input('primeiro aluno: '))
nome2 = str(input('segundo aluno: '))
nome3 = str(input('terceiro aluno: '))
nome4 = str(input('terceiro aluno: '))
alunos = [nome1, nome2, nome3, nome4]
random.shuffle (alunos)
print(f'A ordem será::{alunos}')