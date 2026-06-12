# CONFigureWCDMaSIGNiFADingCARRiercAWGNNOISe

Module: WCDMA Signaling
Source: 8b59347c05f3486e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Module AWGN
 > 
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:AWGN:NOISe
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:AWGN:NOISe 
<Noise>
Sets the total AWGN level within the channel bandwidth, applicable to AWGN inserted via the internal fading module.
For multi-carrier scenarios, the same settings are applied to all carriers. Thus it is sufficient to configure one carrier.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Noise>
Range: 
depends on connector, external attenuation, base level and insertion loss
*RST:
-70 dBm
Default unit: 
dBm
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS410, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Noise"
Top