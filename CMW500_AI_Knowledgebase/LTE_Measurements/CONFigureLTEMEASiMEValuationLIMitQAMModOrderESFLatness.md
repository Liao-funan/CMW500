# CONFigureLTEMEASiMEValuationLIMitQAMModOrderESFLatness

Module: LTE Measurements
Source: 44ad34878e364e43.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:ESFLatness
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:ESFLatness 
<Enable>, <Range1>, <Range2>, <Max1Min2>, <Max2Min1>, <EdgeFrequency>
Defines limits for the equalizer spectrum flatness (16-QAM or 64-QAM modulation).
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<Range1>
Upper limit for max(range 1) - min(range 1)
Range: 
-256 dBpp  to  256 dBpp
*RST:
5.4 dBpp
Default unit: 
dBpp
<Range2>
Upper limit for max(range 2) - min(range 2)
Range: 
-256 dBpp  to  256 dBpp
*RST:
9.4 dBpp
Default unit: 
dBpp
<Max1Min2>
Upper limit for max(range 1) - min(range 2)
Range: 
-256 dB  to  256 dB
*RST:
6.4 dB
Default unit: 
dB
<Max2Min1>
Upper limit for max(range 2) - min(range 1)
Range: 
-256 dB  to  256 dB
*RST:
8.4 dB
Default unit: 
dB
<EdgeFrequency>
Frequency band edge distance of border between range 1 and range 2
Range: 
0 MHz  to  20 MHz
*RST:
3 MHz
Default unit: 
Hz
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.0.10
Top