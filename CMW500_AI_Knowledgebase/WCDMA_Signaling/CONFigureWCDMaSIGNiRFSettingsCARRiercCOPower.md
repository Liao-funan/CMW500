# CONFigureWCDMaSIGNiRFSettingsCARRiercCOPower

Module: WCDMA Signaling
Source: 2069cf3e96bf4069.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:COPower
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:COPower 
<OutChannelPow>
Sets the base level of the generator. For multi-carrier, it can be set per carrier.
The allowed value range can be calculated as follows:
Range (Base Level) = Range (Output Power) - External Attenuation - Insertion Loss + Baseband Level
Range (Output Power) = -130 dBm to 0 dBm (RFx COM) or -120 dBm to 13 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Insertion loss is only relevant for internal fading. Baseband level only relevant for external fading.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<OutChannelPow>
Range: 
see above
*RST:
-56.1 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Output Power (Ior)"
Top