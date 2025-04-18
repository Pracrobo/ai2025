
## pip install selenium
# pip install webdriver_manager
#https://developer.chrome.com/docs/chromedriver/downloads?hl=ko
# 
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import csv
import time


options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)
driver.get('https://www.naver.com')



search_box = driver.find_element(By.NAME, 'query')
search_box.send_keys("Python Programming")
search_box.submit() # 제출해라
time.sleep(5) # 20s 떠있어

html = driver.page_source #드라이버로부터 본인이 보고있는 페이지 달라한다.
driver.quit()

soup = BeautifulSoup(html, 'html.parser')


# #main_pack > section.sc_new.sp_nbook._prs_bok_lst._slog_visible > div.api_subject_bx._nshopping_book_pc > div.book_list_wrap._book_content_root > div > ul > li:nth-child(1) > div > div.info_area > a
book_div = soup.find_element(By.CSS_SELECTOR, 'div.book_list_wrap._book_content_root > div >  ul > li:nth-child(1) > div > div.info_area > a')
print(book_div)
a_tags = book_div.select('a.item_title')

my_book_list = [] 
for book in a_tags:
    title = book.text.strip()
    link = book.get("href")
    my_book_list.append([title, link])
print(my_book_list)


with open("naver_books.csv", mode='w', newline='', encoding='utf-8') as file:
    writer  = csv.writer(file)
    writer.writerow(['제목', '링크']) #헤더
    writer.writerows(my_book_list) #헤더
