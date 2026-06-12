# CONFigureDATACONTrolIMS2TRANsportSELection

Module: Data Application Unit
Source: 63c598e03b7247b4.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
General IMS Settings
 > 
CONFigure:DATA:CONTrol:IMS2:TRANsport:SELection
CONFigure:DATA:CONTrol:IMS2:TRANsport:SELection 
<TransportSelection>
Configures whether TCP or UDP is used by the internal IMS server.
Parameters:
<TransportSelection>
DEFault |
 
 TCP |
 
 UDP |
 
 CUSTom
DEFault
: Fixed threshold as defined in RFC 3261
TCP
: Only TCP is used
UDP
: Only UDP is used
CUSTom
: UDP for short messages, TCP for long messages, threshold configurable via 
CONFigure:
​
DATA:
​
CONTrol:
​
IMS2:
​
THReshold:
​
VALue
*RST:
DEF
Example: 
See 
"Using the internal IMS server"
Firmware/Software: 
V3.5.21
Manual operation: 
See 
"Transport Selection, UDP/TCP Threshold"
Top