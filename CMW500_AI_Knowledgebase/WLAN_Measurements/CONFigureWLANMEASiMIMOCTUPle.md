# CONFigureWLANMEASiMIMOCTUPle

Module: WLAN Measurements
Source: 404631e2b5b9493e.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:WLAN:MEAS<i>:MIMO:CTUPle
CONFigure:WLAN:MEAS<i>:MIMO:CTUPle 
<ConTuple>
This command is available on the R&S
 
CMW100 only.
It sets the connectors to be reserved for switched MIMO measurements. The number of connected antennas can be further limited using 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
SMIMo:
​
NOANtennas
.
Setting the <ConTuple> is only possible if a switched MIMO scenario has already been activated via 
ROUTe:
​
WLAN:
​
MEAS<i>:
​
SCENario:
​
MIMO<PathCount>
.
Parameters:
<ConTuple>
CT12 |
 
 CT34 |
 
 CT56 |
 
 CT78 |
 
 CT14 |
 
 CT58
Connector range to be reserved
CTxy
 means connector 1.x to 1.y.
For the MIMO2x2 scenario, the values CT12, CT34, CT56 and CT78 are possible. For the MIMO4x4 scenario, the values CT14 and CT58 are possible.
*RST:
CT12
Firmware/Software: 
V3.5.30
Options: 
R&S CMW-KM653
Manual operation: 
See 
"Connector Tuple"
Top