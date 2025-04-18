import requests
from bs4 import BeautifulSoup

def get_url(url):
    response = requests.get(url)
    data = response.text
    soup = BeautifulSoup(data, 'html.parser')
    return soup
# 미션1. t뉴스 타이틀 출력
## 미션 2. 뉴스의 링크가져오기, 그 링크 클릭래서 갈 수있도록 하기

def contents_cro(url):
    url = url
    soup = get_url(url)
    # 동적페이지가 그려지는 곳 : ClientSide pc js는 브라우저에서만 동작
    # js가 실행되는건 클라이언트의 브라우저 안에서 실행되는 것
    # 코드를 가져와 실행하는건 브라우저
    news_contents = soup.select('.NewsEndMain_article_head_date_info__jGlzH')

def get_naver_news():
    url = 'https://sports.news.naver.com/index.nhn'
    soup = get_url(url)
    contents = soup.select('.today_list > li')
    for i in contents:
        a_tag = i.select_one('a')
        strong = i.select_one('strong')
        contents_cro(a_tag['href'])
        print(f"방문 주소: {a_tag['href']}")
    

# items = soup.find_all('li', class_="today_item")

    # i = news_contents.select('span')
    # print(i)
#     titles = item.a['title'].strip
#     print(titles)
#     break
