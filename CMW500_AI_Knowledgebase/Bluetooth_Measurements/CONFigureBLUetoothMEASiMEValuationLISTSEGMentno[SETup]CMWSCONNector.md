# CONFigureBLUetoothMEASiMEValuationLISTSEGMentno[SETup]CMWSCONNector

Module: Bluetooth Measurements
Source: 9d4ec72e24ce4555.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:CMWS:CONNector
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:CMWS:CONNector 
<CMWSConnector>
Selects the RF input connector for segment <no> for Bluetooth list mode measurements with the R&S
 
CMWS. This setting is only relevant for connector mode 
LIST
, see 
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
V3.2.50
Options: 
R&S CMW-KM012
Top