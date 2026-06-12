# CONFigureWCDMaSIGNiCELLTIMEDSTime

Module: WCDMA Signaling
Source: b524af7e912a4e5f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Time Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:TIME:DSTime
CONFigure:WCDMa:SIGN<i>:CELL:TIME:DSTime 
<Enable>
Specifies a daylight saving time (DST) offset for the time source 
DATE
 (see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
TIME:
​
TSOurce
).
Parameters:
<Enable>
P1H |
 
 P2H |
 
 ON |
 
 OFF
P1H
: +1h offset
P2H
: +2h offset
Additional OFF | ON disables | enables DST
*RST:
OFF (P1H)
Example: 
See 
"Sending Date and Time Information to the UE"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Daylight Saving Time"
Top