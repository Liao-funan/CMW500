# ROUTeWLANMEASiMIMO

Module: WLAN Measurements
Source: 6c1e08ff0c5645ac.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>:MIMO?
ROUTe:WLAN:MEAS<i>:MIMO? 
Returns the configured routing settings for the switched MIMO scenario 
SMI4
 (not supported on R&S
 
CMW100).
Currently, the RF paths are fixed. The results are returned in the following order:
<Scenario>, <Controller>, {<RXConnector>, <RXConverter>}
antenna 1
, ...,
{<RXConnector>, <RXConverter2>}
antenna 4
For connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SMI4
<Controller>
For future use
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
Usage: 
Query only
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KM653
Manual operation: 
See 
"Scenario = MIMO4xn"
Top