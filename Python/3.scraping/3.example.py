import requests


url = 'https://example.com'

response = requests.get(url)
data = response.text 
print(data)
# 자료구조로 볼때 String 포맷