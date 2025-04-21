import requests
from bs4 import BeautifulSoup
import csv, json
# import openpyxl 엑셀로 저장
# import gspread # 구글 시트 저장

URL = 'https://www.moviechart.co.kr/rank/realtime/index/image'
headers = { 
    'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
}

response = requests.get(URL, headers=headers)
#if(response.status_code == 200):
#    print('성공')
response.raise_for_status() # 오류발생시 예외 발생
soup = BeautifulSoup(response.text, 'html.parser')
# 미션: 영화 랭킹을 가져오시오 (제목, 이미지 URL, 상세페이지 링크)

data =  soup.select('li.movieBox-item')
print('무비 카드 개수:' , len(data))

# 결과 저장 list
movies = []
for card in data:
    title_tag = card.select_one('div.movie-title h3')
    img_tag = card.select_one('img')
    link_tag = card.select_one('a')

    title = title_tag.text.strip() if title_tag else '제목없음'
    image_url = img_tag['src'] if img_tag and img_tag.has_attr('src') else '이미지 없음'
    detail_link = 'https://www.moviechart.co.kr' + link_tag['href'] if link_tag  else '링크없음'
    # print(f"제목: {title} , 이미지: {image_url}, 상세페이지: {detail_link}")
    movies.append([title, image_url, detail_link])

# csv 파일로 저장 - list가 효율적(heading 1줄, 나머지 data)
csv_filename = 'movie_chart.csv' #파일은 비동기처리
with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['제목', '이미지 URL', '상세링크']) # heading 한줄
    writer.writerows(movies)

    print(f"csv 파일 저장 완료 : {csv_filename}")  
