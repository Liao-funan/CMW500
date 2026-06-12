# CONFigureGSMSIGNiCELLATIMeoutMOC

Module: GSM Signaling
Source: 32081d98c9c04313.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:GSM:SIGN<i>:CELL:ATIMeout:MOC
CONFigure:GSM:SIGN<i>:CELL:ATIMeout:MOC 
<Time>
Defines the time period of R&S
 
CMW alerting state.
Parameters:
<Time>
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
"Setting Timers and Constants"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Alerting Timeout"
Top