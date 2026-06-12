# ROUTeLTEMEASi

Module: LTE Measurements
Source: 3b24b61e940a4e54.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:LTE:MEAS<i>?
ROUTe:LTE:MEAS<i>? 
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
: Standalone (non-signaling)
CSPath
: Combined signal path
MAPRotocol
: Measure at protocol test
<Controller>
Controlling application for scenario CSPath or MAPRotocol
<RXConnector>
RF connector for the input path
<RFConverter>
RX module for the input path
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Scenario = StandAlone"
Top