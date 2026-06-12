# CONFigureNIOTMEASiMEValuationLISTCMWSCMODe

Module: NBIoT Measurements
Source: b5d23c5799ea4e64.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:CMWS:CMODe
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:CMWS:CMODe 
<ConnectorMode>
Specifies how the input connector is selected for NB-IoT list mode measurements with the R&S
 
CMWS.
Parameters:
<ConnectorMode>
GLOBal |
 
 LIST
GLOBal:
 The same input connector is used for all segments. It is selected in the same way as without list mode, for example via 
ROUTe:NIOT:MEAS<i>:SCENario:SALone
.
LIST:
 The input connector is configured individually for each segment. See 
CONFigure:
​
NIOT:
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
V3.7.20
Options: 
R&S CMW-KM012
Top