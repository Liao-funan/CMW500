# CONFigureGSMSIGNiCELLTIMEDSTime

Module: GSM Signaling
Source: f99c5b953b2145b1.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Time Settings
 > 
CONFigure:GSM:SIGN<i>:CELL:TIME:DSTime
CONFigure:GSM:SIGN<i>:CELL:TIME:DSTime 
<Enable>
Specifies a daylight saving time (DST) offset for the time source 
DATE
 (see 
CONFigure:
​
GSM:
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
: +1h offset if DST is ON
P2H
: +2h offset if DST is ON
*RST:
OFF (P1H)
Additional parameters OFF (ON) disables (enables) DST.
Example: 
See 
"Sending Date and Time Information to the MS"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS210
Manual operation: 
See 
"Daylight Saving Time"
Top