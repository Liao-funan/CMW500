# ROUTeGSMMEASi

Module: GSM Measurements
Source: 3a908fa7c20442c8.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:GSM:MEAS<i>?
ROUTe:GSM:MEAS<i>? 
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
: Measure@Protocol test
<Controller>
Controlling application for scenario CSPath or MAPRotocol
<RXConnector>
RF connector for the input path
<RFConverter>
RX module for the input path
Example: 
See 
"Specifying General Measurement Settings"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Scenario"
Top