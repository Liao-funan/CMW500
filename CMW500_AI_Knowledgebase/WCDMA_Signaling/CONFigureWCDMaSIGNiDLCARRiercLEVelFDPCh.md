# CONFigureWCDMaSIGNiDLCARRiercLEVelFDPCh

Module: WCDMA Signaling
Source: 4fe4bcbb9a5c414e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
DPCH / F-DPCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:FDPCh
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:FDPCh 
<Level>
Sets the level of F-DPCH. The settings of DPCH level and F-DPCH level are equal. F-DPCH is activated instead of DPCH while the CPC feature is active or while a secondary uplink is enabled
Suffix: 
<c>
1..*
Downlink carrier - only relevant for uplink multi-carrier scenarios
Parameters:
<Level>
Range: 
-80 dB to 0 dB
*RST:
carrier 1 ON: -10.3 dB; carrier 2 ON: -11.4 dB
Additional parameters: OFF | ON (disables the channel | enables the channel using the previous/default level)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V3.0.30
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS413
Manual operation: 
See 
"Level"
Top