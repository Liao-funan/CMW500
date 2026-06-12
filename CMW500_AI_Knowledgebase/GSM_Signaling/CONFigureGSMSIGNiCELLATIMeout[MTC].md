# CONFigureGSMSIGNiCELLATIMeout[MTC]

Module: GSM Signaling
Source: 69d61aee005c42bf.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:GSM:SIGN<i>:CELL:ATIMeout[:MTC]
CONFigure:GSM:SIGN<i>:CELL:ATIMeout[:MTC] 
<Time>
Defines the maximum time period in seconds during which the phone is ringing in the case of call to mobile (mobile terminated call). If the call is not answered, the R&S
 
CMW returns to the synchronized state.
Parameters:
<Time>
Range: 
1 s  to  120 s
*RST:
10 s
Default unit: 
s
Example: 
See 
"Setting Timers and Constants"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Alerting Timeout"
Top