# CONFigureBLUetoothMEASiMEValuationLISTCMWSCMODe

Module: Bluetooth Measurements
Source: 54ee421d2ac844cb.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:CMWS:CMODe
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:CMWS:CMODe 
<ConnectorMode>
Specifies how the input connector is selected for Bluetooth list mode measurements with the R&S
 
CMWS.
Parameters:
<ConnectorMode>
GLOBal |
 
 LIST
GLOBal:
 The same input connector is used for all segments. It is selected in the same way as without list mode, for example via 
ROUTe:BLUetooth:MEAS<i>:SCENario:SALone
.
LIST:
 The input connector is configured individually for each segment. See 
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>[:
​
SETup]:
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
V3.2.50
Options: 
R&S CMW-KM012
Top