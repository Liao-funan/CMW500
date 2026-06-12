# ROUTeGPRFMEASi

Module: GPRF Measurements
Source: 0b8f6627915e4b9a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:GPRF:MEAS<i>?
ROUTe:GPRF:MEAS<i>? 
Returns the configured routing settings.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SALone |
 
 CSPath
SALone
: standalone (non-signaling) scenario
CSPath
: combined signal path scenario
<Master>
Controlling application for scenario CSPath
<RF Connector>
RF connector for the input path
<RF Converter>
RX module for the input path
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Scenario"
Top