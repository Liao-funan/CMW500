# CONFigureGSMMEASiMEValuationLISTCMWSCMODe

Module: GSM Measurements
Source: a98ebc46af5d4b67.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:CMWS:CMODe
CONFigure:GSM:MEAS<i>:MEValuation:LIST:CMWS:CMODe 
<ConnectorMode>
Specifies how the input connector is selected for GSM list mode measurements with the R&S
 
CMWS.
Parameters:
<ConnectorMode>
GLOBal |
 
 LIST
GLOBal:
 The same input connector is used for all segments. It is selected in the same way as without list mode, for example via 
ROUTe:GSM:MEAS<i>:SCENario:SALone
.
LIST:
 The input connector is configured individually for each segment. See 
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
CMWS:
​
CONNector
.
*RST:
GLOB
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KM012
Top