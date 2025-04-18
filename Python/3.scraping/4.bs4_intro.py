## https://pypi.org/project/beautifulsoup4/
from bs4 import BeautifulSoup
# 파서임
html_doc = """

<html>
<head>
    <title> 간단한 HTML 예제 </title>
</head>
<body>
    <h1> 안녕하세요 </h1>
    <p> 이것은 간단한 HTML 예제입니다 </p>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
print(html_doc) # 문자열
print(soup) # dom으로 찍은것(메모리상에 html로)
print("---------------")
print(html_doc.title)
print(soup.title)
print(soup.h1.text)
print(soup.p)
print(soup.p.text)