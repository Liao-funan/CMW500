# CONFigureGSMSIGNiRFSettingsLEVelTCH[CARRierc]

Module: GSM Signaling
Source: c8e9d587836d4c51.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:LEVel:TCH[:CARRier<c>]
CONFigure:GSM:SIGN<i>:RFSettings:LEVel:TCH[:CARRier<c>] 
<Level>
Defines the absolute level of the traffic channel (TCH) and the packet data channel (PDCH).
The allowed value range can be calculated as follows:
Range (Level) = Range (Output Power) - External Attenuation - Insertion Loss + (Baseband Level + 15 dB)
Range (Output Power) = -130 dBm to 0 dBm (RFx COM) or -120 dBm to 13 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Insertion Loss
 is only relevant for internal fading, 
(Baseband Level + 15 dB)
 only for external fading.
Suffix: 
<c>
1..2
Selects the carrier - only relevant in dual carrier mode. In this software version, both carriers use the setting of carrier 1. Carrier 2 can only be queried.
Parameters:
<Level>
Range: 
see above
Increment: 
0.01 dB
*RST:
-80 dBm
Default unit: 
dBm
Example: 
See 
"Configuring BCCH, TCH and PDCH"
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"DL Reference Level"
Top