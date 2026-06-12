# CONFigureWCDMaSIGNiRFSettingsCARRiercEATTenuationOUTPut

Module: WCDMA Signaling
Source: 50fd350294394712.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EATTenuation:OUTPut
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EATTenuation:OUTPut 
<ExtAttenuation>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF output connector.
Suffix: 
<c>
1..*
Output path
For "Dual Carrier / Dual Band RX Diversity Fading" use:
..:CARRier1:..
 for carrier 1, output path 1
..:CARRier2:..
 for carrier 1, output path 2
..:CARRier3:..
 for carrier 2, output path 1
..:CARRier4:..
 for carrier 2, output path 2
Parameters:
<ExtAttenuation>
Range: 
-50 dB  to  90 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"External Attenuation"
Top