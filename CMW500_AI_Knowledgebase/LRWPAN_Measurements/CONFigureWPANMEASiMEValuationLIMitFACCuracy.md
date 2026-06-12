# CONFigureWPANMEASiMEValuationLIMitFACCuracy

Module: LRWPAN Measurements
Source: 68e28531f2b94ac6.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:LIMit:FACCuracy
CONFigure:WPAN:MEAS<i>:MEValuation:LIMit:FACCuracy 
<FreqAccuracyppm>, <FreqAccuracykHz>, <FreqAccppmEnble>, <FreqAcckHzEnble>
Defines the upper limit for the frequency accuracy.
Parameters:
<FreqAccuracyppm>
Range: 
0 ppm  to  80 ppm
*RST:
40 ppm
Default unit: 
ppm
<FreqAccuracykHz>
Range: 
0 kHz  to  200 kHz
*RST:
98 kHz
Default unit: 
Hz
<FreqAccppmEnble>
OFF |
 
 ON
Disable or enable limit check for frequency accuracy defined in ppm.
*RST:
ON
<FreqAcckHzEnble>
OFF |
 
 ON
Disable or enable limit check for frequency accuracy defined in kHz.
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Modulation Limits"
Top