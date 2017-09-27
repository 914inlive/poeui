# poeui

畫面上一次顯示10盒，被戳完或是盒子過期自動補
主畫面顯示盒子，點擊出現盒子最大獎
盒子獎項沒有預設，每次抽每次從pool撈
被抽廣播更新盒子，抽獎人跳動畫

一上線
https:
1.user info: uid, name, credit
2.current box id list: box ids

進入盒子畫面, get box detail
https: box id

戳
https: uid,box id, box pos

ws
boxStatus
boxList

https
get/user
get/boxs
get/box/id
post/box/position

nodejs
HTTPS(resource, includes the games)
WS(broad news, runtime info)
Redis, MongoDB

buff
next time discount 1~100%
next time get reward *101~x00%

BOX SHEET
id, name, credit, x size, y size, texture, pool(json), active start time, active end time
1, hi box, 10, 10, ...,
 {[level: 1, n:66], [level:2, n:34]},
0, 2017/01/01

ITEM SHEET
id, name, reward tpye, amount, level

DB
MEMBER SYSYTEM
id, pass, credit, bonus, items
last login ip/time, register date

AH, INBOX,ORDER
