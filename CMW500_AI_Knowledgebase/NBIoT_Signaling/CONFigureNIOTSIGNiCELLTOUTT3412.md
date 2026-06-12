# CONFigureNIOTSIGNiCELLTOUTT3412

Module: NBIoT Signaling
Source: 8c0871804ddf4e6a.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer Settings
 > 
CONFigure:NIOT:SIGN<i>:CELL:TOUT:T3412
CONFigure:NIOT:SIGN<i>:CELL:TOUT:T3412 
<Value>
Configures timer T3412 for periodic tracking area updates.
The information element supports the values 1 to 31 combined with the units 2 seconds, 1 minute and 6 minutes.
This command configures the timer value in seconds. So there are three subranges with different increments.
Parameters:
<Value>
The parameter configures a checkbox (ON | OFF) or a timer value.
ON
Enables the timer and transmission of the timer value.
Setting a timer value sets also ON.
OFF
Disables the timer and transmission of the timer value.
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
"T3412"
Top