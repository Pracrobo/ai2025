
## pip install selenium
# pip install webdriver_manager
#https://developer.chrome.com/docs/chromedriver/downloads?hl=ko
# 
from selenium import webdriver
import time
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
driver.get('https://www.naver.com')

search_box = driver.find_element(By.NAME, 'query')
search_box.send_keys("Python Programming")
search_box.submit()
time.sleep(20) # 20s 떠있어


driver.save_screenshot('search_result2.png')
driver.quit()