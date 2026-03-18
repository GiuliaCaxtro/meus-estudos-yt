#cid = str(input('Em que cidade voçê nasceu? ')).strip()
#print (cid [:5].upper() == 'SANTO') ou
cidade = str(input('digite a cidade: ')).split()
print('a cidade começa com a palavra santo?')
print('santo' in cidade[0].lower())

