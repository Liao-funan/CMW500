# CONFigureNIOTSIGNiCELLTOUTT3324

Module: NBIoT Signaling
Source: 8a36fa10e4eb4c9b.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer Settings
 > 
CONFigure:NIOT:SIGN<i>:CELL:TOUT:T3324
CONFigure:NIOT:SIGN<i>:CELL:TOUT:T3324 
<Value>
Configures timer T3324, that means the idle time before PSM, see also 
CONFigure:
​
NIOT:
​
SIGN<i>:
​
CONNection:
​
PSMallowed
.
The information element supports the values 1 to 31 combined with the units 2 seconds, 1 minute and 6 minutes.
This command configures the timer value in seconds. So there are three subranges with different increments.
Parameters:
<Value>
The parameter configures a checkbox (ON | OFF) or a timer value.
ON
A PSM request is answered with the configured timer value.
Setting a timer value sets also ON.
OFF
The configured timer value is ignored and the user-requested value is returned to the UE after a PSM request.
Range: 
2 s  to  11160 s
Increment: 
2 s (2 s to 62 s), 60 s (120 s to 1860 s), 360 s (2160 s to 11160 s)
*RST:
OFF (2 s)
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"T3324"
Top