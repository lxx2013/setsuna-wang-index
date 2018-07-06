#!/usr/bin/bash
echo -e "\n" >>spider.log
date>>spider.log
echo "***********************************" >>spider.log
./spider.py 1>> spider.log 2>>spider.log
echo -e "\n\n" >>spider.log