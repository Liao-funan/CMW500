# CONFigureGPRFMEASiPOWerLISTCMWSCONNector

Module: GPRF Measurements
Source: 15a44be1bdc942ea.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CONNector
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CONNector 
<Index>, <CMWSConnector>
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CONNector? 
<Index>
Selects the RF input connector for a selected list entry for GPRF power list mode measurements with the R&S
 
CMWS or with an instrument with integrated connector bench.
This setting is only relevant for connector mode 
LIST
, see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
CMWS:
​
CMODe
.
All list entries must use connectors of the same bench.
For possible connector values, see 
"Values for RF Path Selection"
.
Parameters:
<CMWSConnector>
Selects the input connector of the connector bench
*RST:
R11
Parameters for setting and query: 
<Index>
Selects the list entry
Range: 
0  to  3999
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"List > CMWS Connector"
Top