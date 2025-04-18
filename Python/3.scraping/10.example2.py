## 스크래핑 예제 : https://pythonscraping.com/pages/page3.html 
# 미션 1. 해당 페이지에 요청한다
## 미션 2. 해당페이지 파싱해서 상품명과 가격을 출력한다.
import requests
from bs4 import BeautifulSoup
url = 'https://pythonscraping.com/pages/page3.html'

response = requests.get(url) # Response <200> 
data = response.text
# print(data)
soup = BeautifulSoup(data, 'html.parser')
gifts = soup.select('#giftList > tr')
print(len(gifts)) #6 개인 이유를 분석

for g in gifts:
    tds = g.select('td')
    if(len(tds) > 0): #이거 빼도 됨
        title = tds[0].text.strip()
        price = tds[2].text.strip()
        print(f"상품명: {title:30} , 가격: {price:20}") #포맷팅
    # print(tds[0].text.strip(), tds[2].text.strip())
