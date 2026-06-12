# CONFigureDATACONTrolDNSLOCalADD

Module: Data Application Unit
Source: 08d90fd004cc46d8.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
CONFigure:DATA:CONTrol:DNS:LOCal:ADD
CONFigure:DATA:CONTrol:DNS:LOCal:ADD 
<URL>, <IP>
Adds an entry to the database of the local DNS server for type A or type AAAA DNS queries.
Each entry consists of two strings, one specifying a domain and the other indicating the assigned IP address.
Setting parameters: 
<URL>
String specifying the URL of a domain, e.g. 
'www.example.com'
<IP>
Assigned IPv4 address or IPv6 address as string, e.g. 
'192.168.168.170'
 or 
'fcb1:abab:1::1'
Example: 
See 
"Configuring DNS Server Settings"
Usage: 
Event
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Internal DNS entries"
Top