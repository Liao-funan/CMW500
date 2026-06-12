# CONFigureGSMSIGNiRFSettingsEATTenuationBCCHOUTPut

Module: GSM Signaling
Source: 889f5a3ff35249b2.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:BCCH:OUTPut
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:BCCH:OUTPut 
<ExtRFOutAtt>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF output connector for the BCCH path. This command is only relevant for scenario "BCCH and TCH/PDCH".
The allowed value range can be calculated as follows:
Range = [-130 - (BCCH DL 
"Level"
) to -(BCCH DL 
"Level"
)]
Parameters:
<ExtRFOutAtt>
Range: 
see above
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"External Attenuation"
Top