## os : https://docs.python.org/3.12/library/os.html#module-os

import os

print(os.getlogin()) # <built-in function getlogin>

current_dir = os.getcwd() # current working directory
print("현재 작업 디렉토리: " + current_dir)

new_dir = "new_dir"
os.rmdir(new_dir)
# os.mkdir(new_dir)


print(os.entenv('PATH'))




