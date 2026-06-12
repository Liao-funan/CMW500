# CONFigureLTEMEASiCAGGregationMODE

Module: LTE Measurements
Source: 9fb303999ecd442c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:CAGGregation:MODE
CONFigure:LTE:MEAS<i>:CAGGregation:MODE 
<CAmode>
Selects how many component carriers with intra-band contiguous aggregation are measured.
For the combined signal path scenario, use 
ROUTe:
​
LTE:
​
MEAS<i>:
​
SCENario:
​
CSPath
.
Parameters:
<CAmode>
OFF |
 
 INTRaband
OFF
: only one carrier is measured
INTRaband
: two carriers (BW class B & C)
*RST:
OFF
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.2.70
Options: 
R&S CMW-KM502/-KM552 (FDD/TDD) for INTRaband
Manual operation: 
See 
"Carrier Aggregation Mode"
Top