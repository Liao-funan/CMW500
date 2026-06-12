# CONFigureGSMSIGNiRFSettingsLEVelBCCH

Module: GSM Signaling
Source: b4dce7e590dc437e.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:LEVel:BCCH
CONFigure:GSM:SIGN<i>:RFSettings:LEVel:BCCH 
<Level>
Defines the absolute level of the broadcast control channel (BCCH).
The BCCH level depends on the selected scenario.
Setting the BCCH level is only allowed for scenario "BCCH and TCH/PDCH". The allowed range can be calculated as follows:
Range (Level) = Range (Output Power) - External Attenuation - Insertion Loss + (Baseband Level + 15 dB)
Range (Output Power) = -130 dBm to 0 dBm (RFx COM) or -120 dBm to 13 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Please notice the ranges of 
output power
 quoted in the data sheet.
Insertion Loss
 is only relevant for internal fading, 
(Baseband Level + 15 dB)
 only for external fading.
For other scenarios, the BCCH level equals the TCH/PDCH 
"DL Reference Level"
 with the lower level limit of -95 dBm.
Parameters:
<Level>
Range: 
see above
*RST:
-80 dBm
Default unit: 
dBm
Example: 
See 
"Configuring BCCH, TCH and PDCH"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Level"
Top