# CONFigureWCDMaSIGNiCELLTOUTOSYNch

Module: WCDMA Signaling
Source: 2d8fa2ed5d064489.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:OSYNch
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:OSYNch 
<Value>
Sets the out-of-synchronization timeout value.
This value specifies the time after which the instrument, having waited for a signal from the connected UE, releases the connection and returns to state registered.
Parameters:
<Value>
Range: 
2 s  to  25 s
*RST:
4 s
Default unit: 
s
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V1.0.15.0
V3.5.20: range reduced
Options: 
R&S CMW-KS410
Manual operation: 
See 
"TimeOut of OutOfSynch"
Top