# CONFigureWCDMaSIGNiDLCARRiercLEVelEAGCh

Module: WCDMA Signaling
Source: fd13293276d649eb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HSUPA DL Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:EAGCh
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:EAGCh 
<Level>
Sets the level of the E-AGCH. Setting a power level also activates the channel.
Suffix: 
<c>
1..*
Downlink carrier - only relevant for uplink multi-carrier scenarios
Parameters:
<Level>
Range: 
-80 dB  to  0 dB
*RST:
-9.3 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables the channel | enables the channel using the previous/default level)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Level"
Top