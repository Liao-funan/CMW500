# CONFigureLTEMEASiMEValuationSRSENABle

Module: LTE Measurements
Source: 9e6ba3813b8b4fa8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:SRS:ENABle
CONFigure:LTE:MEAS<i>:MEValuation:SRS:ENABle 
<Enable>
Specifies whether a sounding reference signal is allowed (ON) or not (OFF).
For the combined signal path scenario, use 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
SRS:
​
ENABle
.
Parameters:
<Enable>
OFF |
 
 ON
OFF
: no SRS signal
ON
: SRS signal allowed in the last SC-FDMA symbol of each subframe
*RST:
OFF
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Sounding RS (SRS)"
Top