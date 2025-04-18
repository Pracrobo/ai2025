# pip install python-dotenv
import urllib.request
import json
import os
from dotenv import load_dotenv
#.env를 읽어서 해당 파일을 
load_dotenv()

client_id = os.getenv("NAVER_CLIENT_ID")
client_secret = os.getenv("NAVER_CLIENT_SECRET")
# client_secret = open("secret.text", "r").read() 
encText = urllib.parse.quote("맛집")
url = "https://openapi.naver.com/v1/search/blog.json?query=" + encText + "&start=11&display=30"# JSON 결과
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    # total_contents = json.loads(response_body.decode('utf-8'))
    contents = response_body.decode('utf-8')
    contents_json = json.loads(contents)
    
    for item  in contents_json["items"]:
        title = item ["title"]
        link = item ["link"]
        description = item ["description"]
        postdate = item ["postdate"]
        date_formatted = f"{postdate[:4]}.{postdate[4:6]}.{postdate[6:]}"
       
        print(f"{contents_json["display"]}개의 맛집 내용\n")
        print(f"제목: {title}\n")
        print(f"설명: {description}\n")
        print(f"링크: {link}\n")
        print(f"날짜: {date_formatted}\n")
###
###
##    with open("naver_맛집.csv", mode='w', newline='', encoding='utf-8') as file:
##        writer  = csv.writer(file)
##        writer.writerow(['제목', '링크']) #헤더
##        writer.writerows(my_book_list) #헤더
else:
    print("Error Code:" + rescode)