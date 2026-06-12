# CONFigureGSMMEASiMEValuationLISTLRANge

Module: GSM Measurements
Source: 406e0957354e4223.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:LRANge
CONFigure:GSM:MEAS<i>:MEValuation:LIST:LRANge 
<StartIndex>, <NrSegments>
Select a range of measured segments. The segments must be configured using 
CONFigure:
​
GSM:
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
Relative number within the range of measured segments
Range: 
1  to  512
*RST:
10
Example: 
See 
"GSM List Mode"
Firmware/Software: 
V1.0.15.21
V3.2.30: increased number of measured segments (from 200)
Options: 
R&S CMW-KM012
Top