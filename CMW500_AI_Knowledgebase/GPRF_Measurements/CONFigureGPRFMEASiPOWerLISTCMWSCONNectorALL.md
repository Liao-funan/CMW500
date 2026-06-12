# CONFigureGPRFMEASiPOWerLISTCMWSCONNectorALL

Module: GPRF Measurements
Source: 605de21d6fbe4a9d.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CONNector:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CONNector:ALL 
<CMWSConnector>...
Selects the RF input connectors for the first n list entries (n=1 to 4000). Only for GPRF power list mode measurements with the R&S
 
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
Comma-separated list of n settings, for segment 0 to n-1
*RST:
R11, R11, ...
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"List > CMWS Connector"
Top