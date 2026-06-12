# CONFigureWCDMaSIGNiDLCARRiercLEVelHSPDsch

Module: WCDMA Signaling
Source: 4a4d767e131e4009.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-PDSCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:HSPDsch
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:HSPDsch 
<Level>
Sets the level of the HS-PDSCH summed over all active codes. Setting a power level also enables the channel.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Level>
Range: 
-80 dB  to  0 dB
*RST:
carrier 1: -9.3 dB, carrier 2: -10.4 dB
Default unit: 
dB
Additional parameters: OFF | ON (disable | enable the channel)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Level"
Top