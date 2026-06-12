# CONFigureLTESIGNiCELLTIMEDSTime

Module: LTE Signaling
Source: 834218d484724402.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Time
 > 
CONFigure:LTE:SIGN<i>:CELL:TIME:DSTime
CONFigure:LTE:SIGN<i>:CELL:TIME:DSTime 
<Enable>
Specifies a daylight saving time (DST) offset for the time source 
DATE
 (see 
CONFigure:
​
LTE:
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
 
 P2H
P1H
: +1h offset if DST is ON
P2H
: +2h offset if DST is ON
*RST:
OFF (P1H)
Additional parameters: OFF | ON (disables | enables DST)
Example: 
See 
"Sending Date and Time Information to the UE"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Daylight Saving Time"
Top