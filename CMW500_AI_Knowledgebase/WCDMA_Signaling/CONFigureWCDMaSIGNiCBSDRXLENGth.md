# CONFigureWCDMaSIGNiCBSDRXLENGth

Module: WCDMA Signaling
Source: 933b1b47fd9b4b0e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Cell Broadcast Service Settings
 > 
CONFigure:WCDMa:SIGN<i>:CBS:DRX:LENGth
CONFigure:WCDMa:SIGN<i>:CBS:DRX:LENGth 
<LengthOfPeriod>
Specifies the length of DRX (L) that the UE can use for the processing of particular CB message. P denotes the period of scheduling message, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CBS:
​
DRX:
​
PERiod
.
Define value matching with the position of the specific CB message within the CBS scheduling period.
Parameters:
<LengthOfPeriod>
Range: 
1 TTI  to  P-1 TTIs
*RST:
32
Default unit: 
TTI
Example: 
See 
"Sending a Cell Broadcast Message"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS170
Manual operation: 
See 
"Length of CBS Sched. Period (L)"
Top