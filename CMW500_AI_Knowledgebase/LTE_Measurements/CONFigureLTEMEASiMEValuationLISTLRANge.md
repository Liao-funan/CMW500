# CONFigureLTEMEASiMEValuationLISTLRANge

Module: LTE Measurements
Source: b6387fdda4994788.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:LRANge
CONFigure:LTE:MEAS<i>:MEValuation:LIST:LRANge 
<StartIndex>, <NrSegments>
Select a range of measured segments. The segments must be configured using 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SETup
.
Parameters:
<StartIndex>
First measured segment in the range of configured segments
Range: 
1  to  2000
*RST:
1
<NrSegments>
Number of measured segments
Range: 
1  to  1000
*RST:
10
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V2.0.10
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top