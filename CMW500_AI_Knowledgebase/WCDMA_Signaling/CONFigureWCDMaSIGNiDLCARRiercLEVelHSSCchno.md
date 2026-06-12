# CONFigureWCDMaSIGNiDLCARRiercLEVelHSSCchno

Module: WCDMA Signaling
Source: 6d15cf682af041e0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-SCCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:HSSCch<no>
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:LEVel:HSSCch<no> 
<Level>
Sets the level of an HS-SCCH channel. Setting a power level also enables the channel.
Suffix: 
<no>
1..4
Selects the HS-SCCH to be configured
<c>
1..*
Downlink carrier
Parameters:
<Level>
Range: 
-80 dB  to  0 dB
*RST:
carrier 1: -10.3 dB, carrier 2: -11.4 dB (first two channels ON)
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the channel)
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