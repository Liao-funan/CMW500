# CONFigureGSMSIGNiCELLRTMS

Module: GSM Signaling
Source: 7293450266274050.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:GSM:SIGN<i>:CELL:RTMS
CONFigure:GSM:SIGN<i>:CELL:RTMS 
<Time>
Defines the time period after which a previously established but interrupted connection is dropped by the mobile station ("Radiolink Timeout MS").
Parameters:
<Time>
Number of missing SACCH blocks, only multiples of 4 are allowed (rounded automatically)
Range: 
4  to  64
Increment: 
4
*RST:
24
Example: 
See 
"Setting Timers and Constants"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Radiolink Timeout MS"
Top