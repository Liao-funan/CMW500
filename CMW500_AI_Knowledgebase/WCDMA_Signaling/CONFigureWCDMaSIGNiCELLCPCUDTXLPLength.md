# CONFigureWCDMaSIGNiCELLCPCUDTXLPLength

Module: WCDMA Signaling
Source: 3b7b5fbef6d14b35.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Uplink DTX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:LPLength
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:LPLength 
<Length>
Defines the long preamble length that the UE uses during UL DTX cycle 2 to aid synchronization, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Length>
Only the following values are allowed (in slots):
2 | 4 | 15
If you enter another value, the nearest allowed value is set instead.
Range: 
2 slots  to  15 slots
*RST:
4 slots
Default unit: 
slot
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
V3.2.60: added value of 2 slots
Options: 
R&S CMW-KS413
Manual operation: 
See 
"UE DTX Long Preamble Length"
Top