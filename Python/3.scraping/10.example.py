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
gifts = soup.find_all('tr',class_='gift')
for gift in gifts:
    print(gift.td)
    # item_title = gift.td[0]
    # title = item_title.text
    # count = gift.td[2]
    # print(f"상품명: {title} 가격: {count.text}")
    # print('-'*10)
# itemtitles = itemtitle_tr.text
# print(itemtitle_tr.td)
# itemtitle = soup.select(itemtitle_tr.text)