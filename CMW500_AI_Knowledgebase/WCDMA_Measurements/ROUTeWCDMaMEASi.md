# ROUTeWCDMaMEASi

Module: WCDMA Measurements
Source: eaed1afd1a1e42e1.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:MEAS<i>?
ROUTe:WCDMa:MEAS<i>? 
Returns the configured routing settings.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SALone |
 
 CSPath |
 
 MAPRotocol
SALone
: "Standalone (Non Signaling)"
CSPath
: "Combined Signal Path"
MAPRotocol
: "Measure@Protocol Test"
<Controller>
Controlling application for scenario CSPath or MAPRotocol
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Scenario = StandAlone"
Top