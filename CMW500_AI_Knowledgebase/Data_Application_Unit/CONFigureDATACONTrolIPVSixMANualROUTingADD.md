# CONFigureDATACONTrolIPVSixMANualROUTingADD

Module: Data Application Unit
Source: 69923d768adb41db.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IPv6  Settings
 > 
CONFigure:DATA:CONTrol:IPVSix:MANual:ROUTing:ADD
CONFigure:DATA:CONTrol:IPVSix:MANual:ROUTing:ADD 
<Prefix>, <Router>
Adds a route to the pool of manual routes for IPv6. If the destination address of a packet matches the <Prefix>, it is routed to the <Router>.
Setting parameters: 
<Prefix>
String, e.g. 
'fcb1:abab:cdcd:efe0::/64'
, 64-bit prefixes and shorter prefixes allowed
<Router>
Router address as string, e.g. 'fcb1:abcd:17c5:efe0::1'
Example: 
See 
"Configuring IPv6 Settings"
Usage: 
Event
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Routing"
Top