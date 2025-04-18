import requests

url = 'https://jsonplaceholder.typicode.com/users'

response = requests.get(url)
users = response.json()
# print(users)

for user in users:
    # print(user)
    # print("\n")
    # print(user['name'])
    # print(user['company']'bs')
    id = user['id']
    name=user['name']
    username = user['username']
    email = user['email']
    address = user['address']

    print(f"{id:<2} {name:30} {username:>20} {email:20} {address:20}") # <> 정렬 
    # TypeError: unsupported format string passed to dict.__format
    
