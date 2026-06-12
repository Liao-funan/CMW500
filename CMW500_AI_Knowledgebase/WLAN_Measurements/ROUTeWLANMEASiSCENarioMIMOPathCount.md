# ROUTeWLANMEASiSCENarioMIMOPathCount

Module: WLAN Measurements
Source: c3d1aada67d44996.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>:SCENario:MIMO<PathCount>
ROUTe:WLAN:MEAS<i>:SCENario:MIMO<PathCount> 
[<ConTuple>]
This command is available on the R&S
 
CMW100 only.
It enables the switched MIMO scenario selected via 
<PathCount>
 and specifies the RF connectors to be reserved.
The number of receive antennas can be further limited via 
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
To assign RF connectors to the antennas, see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
RFSettings:
​
ANTenna<n>
.
Suffix: 
<PathCount>
2, 4, 8
Selects the scenario MIMO2x2, MIMO4x4 or MIMO8x8.
A query ignores the suffix.
Parameters:
<ConTuple>
CT12 |
 
 CT34 |
 
 CT56 |
 
 CT78 |
 
 CT14 |
 
 CT58 |
 
 CT18
Connector tuple, see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MIMO:
​
CTUPle
Optional parameter with default CT12 for MIMO2x2, default CT14 for MIMO4x4 and fixed value CT18 for MIMO8x8
Return values: 
<Scenario>
SALone |
 
 MIMO2x2 |
 
 MIMO4x4 |
 
 MIMO8x8
Returns the active scenario.
*RST:
SAL
Example: 
Prepare for 802.11ac measurements:
*RST; :CONF:WLAN:MEAS:ISIGnal:STANdard VHTofdm
Select the switched MIMO receive mode:
CONF:WLAN:MEAS:ISIGnal:RMODe SMIMo
Activate the MIMO2x2 scenario with connectors 1.3 and 1.4:
ROUTe:WLAN:MEAS:SCENario:MIMO2 CT34
Activate the MIMO4x4 scenario with connectors 1.5 to 1.8:
ROUTe:WLAN:MEAS:SCENario:MIMO4 CT58
Firmware/Software: 
V3.5.30, V3.5.121 added MIMO8x8
Options: 
R&S CMW-KM652 or R&S CMW-KM653
Manual operation: 
See 
"Scenario = MIMO 2x2 / MIMO 4x4 / MIMO 8x8"
Top