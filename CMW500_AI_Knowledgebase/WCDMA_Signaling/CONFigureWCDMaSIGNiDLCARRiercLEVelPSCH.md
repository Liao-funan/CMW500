# CONFigureWCDMaSIGNiDLCARRiercLEVelPSCH

Module: WCDMA Signaling
Source: 61dbc39007de4c08.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
R99 Channels
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:PSCH
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:PSCH 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:SSCH 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:PCCPch 
<Level>
Set the level of the channel indicated by the last mnemonic. Setting a power level also activates the channel.
Suffix: 
<c>
1..*
Downlink carrier - only relevant for uplink multi-carrier scenarios
Parameters:
<Level>
Range: 
-80 dB to 0 dB
*RST:
carrier 1 ON: -8.3 dB, P-CCPCH: -5.3 dB; carrier 2 OFF
Additional parameters: OFF | ON (disables the channel | enables the channel using the previous/default level)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Top