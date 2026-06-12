# ROUTeWLANMEASi

Module: WLAN Measurements
Source: 1fcf98922d104060.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>?
ROUTe:WLAN:MEAS<i>? 
Returns the configured routing settings for SISO scenarios.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SALone |
 
 CSPath
SALone
: Standalone (non-signaling)
CSPath
: Combined signal path (with WLAN signaling)
<Controller>
Controlling application for scenario CSPath
<RXConnector1>
RF connector for the input path
<RXConverter1>
RX module for the input path
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.30: added CSPath
Manual operation: 
See 
"Scenario = StandAlone"
Top