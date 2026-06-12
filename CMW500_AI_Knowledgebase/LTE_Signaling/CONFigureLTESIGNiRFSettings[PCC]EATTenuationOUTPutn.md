# CONFigureLTESIGNiRFSettings[PCC]EATTenuationOUTPutn

Module: LTE Signaling
Source: 8f4bf37a5b3d4de7.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
RF Path Properties
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:EATTenuation:OUTPut<n>
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:EATTenuation:OUTPut<n> 
<ExtRFOutAtt>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:EATTenuation:OUTPut<n> 
<ExtRFOutAtt>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF output path number <n>. Depending on the transmission scheme, several output paths are used for each carrier and the attenuation can be configured per output path.
Suffix: 
<n>
1..4
<c>
1..4
Parameters:
<ExtRFOutAtt>
Range: 
-50 dB  to  90 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Selecting a Scenario"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"External Attenuation"
Top