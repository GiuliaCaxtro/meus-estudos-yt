# Faça um programa em Python que abra e reproduza o áudio de um arquivo MP3.
import pygame
import time

pygame.init()
pygame.mixer.init()

pygame.mixer.music.load(r"C:\Users\Giulia\Documents\Aulas do guanabara\estudos\python\exercicios\midia\speaking.mp3")
pygame.mixer.music.play()

while pygame.mixer.music.get_busy():
    time.sleep(0.5)
