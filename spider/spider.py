#!/usr/bin/python
#coding=utf-8
from __future__ import unicode_literals
import  json,codecs,re
from selenium import webdriver
from time import sleep
#静态变量
login_url = "https://space.bilibili.com/12828486/#/"

from pyvirtualdisplay import Display
display = Display(visible=0,size=(800,600))
display.start()
print "display.start!"
browser = webdriver.Chrome()
print "Chrome start!"
browser.get(login_url)
browser.find_element_by_css_selector("#username_text").send_keys(username)
browser.find_element_by_css_selector("#password_text").send_keys(password)
browser.find_element_by_css_selector(".login_box_landing_btn").click()

try:
    browser.find_element_by_css_selector("div[index='4']").click()
    browser.find_element_by_css_selector("a[text='学生课程成绩查看']").click()
except BaseException,e:
    print e
else:
    print "login&click success!"
    sleep(5)

#读取老数据
old_datas = []
with open("data/"+username+".json") as raw_data:
    old_datas = json.loads(raw_data.read())
    print "old_datas the last one:\n",old_datas[-1]
#获取新数据
new_datas = []
browser.get("http://yjs.hust.edu.cn/ssfw/navmenu.do?menuItemWid=4E95122E78E5436AE053AB0110AC6181")
for i in range(1,20):
    try:
        a = {}
        a["course_name"] = browser.find_element_by_css_selector("#table_cjxxtb__%d_3"%i).text
        a["score"] = browser.find_element_by_css_selector("#table_cjxxtb__%d_6"%i).text
    except BaseException,e:
        print "No this element:",i
    else:
        new_datas.append(a)
        if a not in old_datas:
            new_str = re.sub(r"[0-9]|\.","",a["course_name"])
	    print "found new score!"
	    print new_str.encode("utf-8"),a["score"].encode("utf-8")
            send_sms("17720486174",username,new_str,a['score'])
	    print "send sms!"

#写回数据
fout = codecs.open("data/"+username+".json","w+","utf-8")
fout.write(json.dumps(new_datas, sort_keys=True, indent=4, ensure_ascii=False))
print "write back!"
fout.close()
browser.close()
