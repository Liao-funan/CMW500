# CONFigureWCDMaSIGNiCELLTOUTMOC

Module: WCDMA Signaling
Source: e1e62c2ed3de4372.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:MOC
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:MOC 
<Timeout>
Defines the time period of R&S
 
CMW alerting state.
Parameters:
<Timeout>
0
: the alerting state is skipped
1 to 255
: time period the R&S
 
CMW waits before changes to "Call Established" state
Range: 
0  to  255
*RST:
0
Default unit: 
s
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"MOC Alerting Timeout"
Top