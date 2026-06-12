# CONFigureGPRFMEASiRFSettingsMLOFfset

Module: GPRF Measurements
Source: 07ad0d2d38e3438a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:MLOFfset
CONFigure:GPRF:MEAS<i>:RFSettings:MLOFfset 
<MixLevOffset>
Varies the input level of the mixer in the analyzer path.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
Parameters:
<MixLevOffset>
The maximum value is limited to 10 dB for HW with less than 160 MHz bandwidth (BB measurement board or K02/K03).
Range: 
-10 dB  to  16 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Mixer Level Offset"
Top