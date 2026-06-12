# CONFigureGSMSIGNiRFSettingsEATTenuationOUTPutn

Module: GSM Signaling
Source: a7ce183058104b02.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:OUTPut<n>
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:OUTPut<n> 
<ExtRFOutAtt>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF output connector. Depending on the scenario, several RF output paths are used and the attenuation can be configured per output path.
The allowed value range can be calculated as follows:
Range = [-130 - 
"DL Reference Level"
 to -
"DL Reference Level"
]
Suffix: 
<n>
1..2
Selects the output path - can be omitted for scenarios using only one output path
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
V1.0.15.0
V3.0.10: <n> added for path selection
Manual operation: 
See 
"External Attenuation"
Top