# ROUTeWLANMEASiSMIMo

Module: WLAN Measurements
Source: 851f975710434c6b.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>:SMIMo?
ROUTe:WLAN:MEAS<i>:SMIMo? 
Returns the configured routing settings for the switched MIMO scenario.
For connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SMI4 |
 
 MIMO2x2 |
 
 MIMO4x4 |
 
 MIMO8x8
SMI4
: Switched MIMO 4xn (R&S
 
CMW500/2xx with BB Meas with two basic frontends)
MIMO2x2
: Switched MIMO 2x2 (R&S
 
CMW100)
MIMO4x4
: Switched MIMO 4x4 (R&S
 
CMW100)
MIMO8x8
: Switched MIMO 8x8 (R&S
 
CMW100)
<Controller>
For future use
<RXConnector1>
<RXConverter1>
<RXConnector2>
<RXConverter2>
<RXConnector3>
<RXConverter3>
<RXConnector4>
<RXConverter4>
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KM653
Manual operation: 
See 
"Scenario = MIMO4xn"
Top