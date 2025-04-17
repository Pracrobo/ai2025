import requests # ModuleNotFoundError: No module named 'requests' , 외부 라이브러리 패키지
# node.js npm install 패키지명
# python pip install 패키지명 
# https://pypi.org/project/requests/
# 가상환경 안에 설치함(anaconda)


# 요청 라이브러리
# 네이버 주세요
# https://requests.readthedocs.io/en/latest/
req = requests.get('https://www.naver.com')
print("웹페이지 내용: ",req) # 웹페이지 내용:  <Response [200]> 객체타입이 Response 객체임
print("헤더정보 : ", req.headers)
print("바디정보 : ", req.text)

