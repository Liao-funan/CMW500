# ROUTeWLANMEASiSCENarioSMIno

Module: WLAN Measurements
Source: fe585c58d4394909.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>:SCENario:SMI<no>?
ROUTe:WLAN:MEAS<i>:SCENario:SMI<no>?? 
<RXConnector1>, <RXConverter1>, <RXConnector2>, <RXConverter2>, <RXConnector3>, <RXConverter3>, <RXConnector4>, <RXConverter4>
Queries the switched MIMO scenario (see 
"Switched MIMO Measurements"
) and the RF routing.
The <no> suffix determines the maximum number of active TX antennas; the {<RXConnector>,<RXConverter>} pairs are set/returned for each of them.
The command is only relevant for an R&S
 
CMW500/2xx with BB Meas with two basic frontends.
Use 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
SMIMo:
​
NOANtennas
 to set the number of measured antennas for a particular measurement.
Suffix: 
<no>
4
The number of RX paths reserved for switched MIMO measurements.
Parameters:
{<RXConnector>
RF1C |
 
 RF2C |
 
 RF3C |
 
 RF4C |
 
 RFAC |
 
 RFBC
RF1C, RF2C, RF3C, RF4C:
RF 1 COM to RF 4 COM front panel connectors
RFAC, RFBC:
Virtual names for the RF COM connectors
<RXConverter>}
RX1 |
 
 RX2 |
 
 RX3 |
 
 RX4
RX (converter) module for the input path.
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KM653
Top