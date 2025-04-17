my_dict =  {
    "name" : "Alice",
    "age" : 25,
    "location" : "Seoul"
}

# node.js 랑 다름 name 이렇게 쓰면 안됨
## key-value 쌍 : dictionary {  }
# 값 변경 가능
print(my_dict) #{'name': 'Alice', 'age': 25, 'location': 'Seoul'}

print("이름은 : " , my_dict["name"])
print("나이는 : " , my_dict["age"])
my_dict["age"] = 26
print("나이는 : " , my_dict["age"])

my_dict["car"] = "현대 K5"
print("내차는 : ", my_dict["car"])
print(my_dict)

key_list = list(my_dict.keys())
print("키들은 : ", key_list)  


value_list = list(my_dict.values())
print("값들은 : ", value_list)


for k, v in my_dict.items():
    print(f"키 : {k} , 값: {v}")