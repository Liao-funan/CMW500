# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoCMWSCONNector

Module: WCDMA Measurements
Source: 4b782bea07ac4d62.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CMWS:CONNector
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CMWS:CONNector 
<CMWSConnector>
Selects the RF input connector for segment <no> for WCDMA list mode measurements with the R&S
 
CMWS. This setting is only relevant for connector mode 
LIST
, see 
CONFigure:
​
WCDMa:
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
1..1000
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
V3.2.60
Options: 
R&S CMW-KM012
Top