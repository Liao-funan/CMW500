# CONFigureWCDMaSIGNiDLCARRiercLEVelEHICh

Module: WCDMA Signaling
Source: a89898816e904039.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HSUPA DL Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:EHICh
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:EHICh 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:ERGCh 
<Level>
Set the level of the channel indicated by the last mnemonic. Setting a power level also activates the channel indicated by the last mnemonic.
E-HICH and E-RGCH use the same power level. Setting the level for one channel sets the same level for the other channel.
Disabling the E-HICH disables also the E-RGCH. Enabling the E-RGCH enables also the E-HICH.
Suffix: 
<c>
1..*
Downlink carrier - only relevant for uplink multi-carrier scenarios
Parameters:
<Level>
Range: 
-80 dB  to  0 dB
*RST:
E-HICH: -12.3 dB, E-RGCH: OFF (-12.3 dB)
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