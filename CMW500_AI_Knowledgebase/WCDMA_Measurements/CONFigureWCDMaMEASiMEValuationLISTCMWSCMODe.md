# CONFigureWCDMaMEASiMEValuationLISTCMWSCMODe

Module: WCDMA Measurements
Source: 3f920628fc444985.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:CMWS:CMODe
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:CMWS:CMODe 
<ConnectorMode>
Specifies how the input connector is selected for WCDMA list mode measurements with the R&S
 
CMWS.
Parameters:
<ConnectorMode>
GLOBal |
 
 LIST
GLOBal:
 The same input connector is used for all segments. It is selected in the same way as without list mode, for example via 
ROUTe:WCDMa:MEAS<i>:SCENario:SALone
.
LIST:
 The input connector is configured individually for each segment. See 
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
V3.2.60
Options: 
R&S CMW-KM012
Top