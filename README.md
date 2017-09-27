# poeui

畫面上一次顯示10盒，被戳完或是盒子過期自動補<br>
主畫面顯示盒子，點擊出現盒子最大獎<br>
盒子獎項沒有預設，每次抽每次從pool撈<br>
被抽廣播更新盒子，抽獎人跳動畫<br>
<br>
一上線<br>
https:<br>
1.user info: uid, name, credit<br>
2.current box id list: box ids<br>
<br>
進入盒子畫面, get box detail<br>
https: box id<br>
<br>
戳<br>
https: uid,box id, box pos<br>
<br>
ws<br>
boxStatus<br>
boxList<br>
<br>
https<br>
get/user<br>
get/boxs<br>
get/box/id<br>
post/box/position<br>
<br>
nodejs<br>
HTTPS(resource, includes the games)<br>
WS(broad news, runtime info)<br>
Redis, MongoDB<br>
<br>
buff<br>
next time discount 1~100%<br>
next time get reward *101~x00%<br>
<br>
BOX SHEET<br>
id, name, credit, x size, y size, texture, pool(json), active start time, active end time<br>
1, hi box, 10, 10, ...,<br>
 {[level: 1, n:66], [level:2, n:34]},<br>
0, 2017/01/01<br>
<br>
ITEM SHEET<br>
id, name, reward tpye, amount, level<br>
<br>
DB
MEMBER SYSYTEM<br>
id, pass, credit, bonus, items<br>
last login ip/time, register date<br>
<br>
AH, INBOX, ORDER
