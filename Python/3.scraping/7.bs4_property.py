## https://pypi.org/project/beautifulsoup4/
from bs4 import BeautifulSoup
# 파서임
html_doc = """
<html>
<head>
    <title> 간단한 HTML 예제 </title>
</head>
<body>
    <div class="container">
        <h1>안녕하세요</h1>
        <p> 이것은 간단한 HTML 예제입니다 </p>
        <a href="https://www.naver.com">네이버로 바로가기</a>
        <img src="example.jpg" alt="예제이미지">
        <img src="example2.jpg" alt="예제이미지2" width="500" height="600">
        <a href="https://www.daum.com">다음으로 바로가기</a>
    </div>
    <ul>
        <li> 항목 1 </li>
        <li> 항목 2 </li>
        <li> 항목 3 </li>
    </ul>
    <div class="footer">
        <p id ="copyright"> 저작권 copyright 2025 내꺼 </p>
    </div>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
link_tag = soup.a
link_tags = soup.find_all('a')
print(link_tag)
print(link_tags)

print('---------------')
# 태그 안에 속성 property 접근
print(link_tag['href'])
# print(link_tags['href']) #리스트라 안됨
for tag in link_tags:
    print(tag['href'])
print('---------------')
img_tag = soup.img # 첫번째 이미지가 나옴
img_tags = soup.find_all('img') #모든 이미지가 리스트에 담김
img_tag2 = img_tags[1] if len(img_tags) > 1 else None # 담긴 리스트에서 2번째 항목(idx=1)을 가져옴
img_tag3 = img_tags[2] if len(img_tags) > 2 else None
print(img_tag2)
print(img_tag3)

print(f"src : {img_tag['src']}, alt: {img_tag['alt']}, 
print(f"src: {img_tag['src']} alt: {img_tag['alt']}, width: {img_tag.get('width', 'NoWidth')}, height: {img_tag.get('height', 'NoHeight')}")
print(f"src : {img_tag2['src']}, alt: {img_tag['alt']}, width: {img_tag.get('width', 'NoWidth')}, height: {img_tag.get('height', 'NoHeight')}")