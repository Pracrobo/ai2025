
## pip install selenium
# pip install webdriver_manager
# https://developer.chrome.com/docs/chromedriver/downloads?hl=ko
# 
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriiverManager

driver = webdriver.Chrome(service=ChromeService(ChromeDriiverManager().install()))
driver.get('https://www.google.com')