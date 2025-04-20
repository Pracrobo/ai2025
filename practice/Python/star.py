print('- 1 -')
for i in range(1, 6):
    print("*" * i)
    
print('- 2 -')
for i in range(1,6):
    print(f"{"*" * i:>5}")
    
print('- 3 -')
for i in list(range(1,10))[::2]:
    print(f"{("*" * i).center(11)}")
    
    
print('- 4 -')
for i in list(range(1,10))[::2]:
    print(f"{("*" * i).center(11)}")
    
for i in list(range(1,10))[::-2]:
    print(f"{("*" * i).center(11)}")