import requests
from bs4 import BeautifulSoup
import csv, json
# import openpyxl 엑셀로 저장
# import gspread # 구글 시트 저장
# url 파싱 도와주는 라이브러리
from urllib.parse import urlparse, urljoin
import os

BASE_URL = 'https://www.moviechart.co.kr'
MOVIERANK_URL = urljoin(BASE_URL,'/rank/realtime/index/image')

HEADERS = { 
    'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
}
response = requests.get(MOVIERANK_URL, headers=HEADERS)
#if(response.status_code == 200):
#    print('성공')
response.raise_for_status() # 오류발생시 예외 발생
soup = BeautifulSoup(response.text, 'html.parser')
# 미션: 영화 랭킹을 가져오시오 (제목, 이미지 URL, 상세페이지 링크)

data =  soup.select('li.movieBox-item')
print('무비 카드 개수:' , len(data))

# 결과 저장 list
movies = []
# 이미지 저장 디렉토리 생성
os.makedirs('thumbnails', exist_ok=True) # 존재하면 에러발생X

def sanitize_filename(name):
# 특수문자 제거
    import re
    return re.sub(r'[\\/*?"<>| ]','_', name) 
# r = replace(앞에 조건에 온 특수문자들을 _로 변환)
## \\ : 이스케이프 문자(\ : 정규표현식에서 기능을 가지고 있어서 \\ 이렇게 한번더 써줌으로써 \문자임을 암시)


for card in data:
    title_tag = card.select_one('div.movie-title h3')
    img_tag = card.select_one('img')
    link_tag = card.select_one('a')

    title = title_tag.text.strip() if title_tag else '제목없음'
    image_url = img_tag['src'] if img_tag and img_tag.has_attr('src') else '이미지 없음'
    
    thumbnail_url = urljoin(BASE_URL, image_url)
    image_data = requests.get(thumbnail_url, headers=HEADERS).content
    if len(image_url) > 0:
        safe_filename = sanitize_filename(title)
        filename = f"thumbnails/{safe_filename}.jpg" # 실제 png, jpg 맞춰야함
        with open(filename, 'wb') as f:
            f.write(image_data)

    
    detail_link = 'https://www.moviechart.co.kr' + link_tag['href'] if link_tag  else '링크없음'
    # print(f"제목: {title} , 이미지: {image_url}, 상세페이지: {detail_link}")
    movies.append({
        "title" : title, 
        "image_url": image_url, 
        "detail_link" : detail_link
    })
# json 파일로 저장 - dic로 저장, list x
json_filenname = 'movie_chart.json'
with open(json_filenname, 'w', encoding='utf-8') as f:
    json.dump(movies, f, ensure_ascii=False, indent=4)

    print(f'JSON 저장 완료: {json_filenname}' )
