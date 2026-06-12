# CONFigureGPRFMEASiRFSettingsEATTenuation

Module: GPRF Measurements
Source: 5a1a003a80034e5a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:EATTenuation
CONFigure:GPRF:MEAS<i>:RFSettings:EATTenuation 
<RFInputExtAtt>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF input connector.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
Parameters:
<RFInputExtAtt>
Range: 
-50 dB  to  90 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"External Attenuation (Input)"
Top