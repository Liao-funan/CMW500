# CONFigureGSMMEASiMEValuationLISTSEGMentnoCMWSCONNector

Module: GSM Measurements
Source: 7547e9053d124190.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:CMWS:CONNector
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:CMWS:CONNector 
<CMWSConnector>
Selects the RF input connector for segment <no> for GSM list mode measurements with the R&S
 
CMWS. This setting is only relevant for connector mode 
LIST
, see 
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
CMWS:
​
CMODe
.
All segments of a list mode measurement must use connectors of the same bench.
For possible connector values, see 
"Values for RF Path Selection"
.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<CMWSConnector>
Selects the input connector of the R&S
 
CMWS
*RST:
R11
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KM012
Top