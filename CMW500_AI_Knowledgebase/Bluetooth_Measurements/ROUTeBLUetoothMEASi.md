# ROUTeBLUetoothMEASi

Module: Bluetooth Measurements
Source: 1d2a071f10cd4dc6.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:BLUetooth:MEAS<i>?
ROUTe:BLUetooth:MEAS<i>? 
Returns the configured routing settings.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SALone |
 
 CSPath
SALone
: standalone (non signaling)
CSPath
: combined signal path
<Master>
Master application for scenario CSPath
<RF Connector>
RF connector for the input path
<RF Converter>
RX module for the input path
Example: 
See 
"Specifying General Measurement Settings"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V3.2.30: "CSPath" added
Manual operation: 
See 
"Scenario, Controlled by"
Top