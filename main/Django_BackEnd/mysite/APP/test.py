from urllib.parse import quote
import datetime
import time

x = datetime.datetime.now()
y = time.asctime()
print(y)
encode = quote(y)

print(encode)