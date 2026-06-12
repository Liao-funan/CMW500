# ROUTeNIOTMEASi

Module: NBIoT Measurements
Source: 934c44715df74262.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:NIOT:MEAS<i>?
ROUTe:NIOT:MEAS<i>? 
Returns the configured routing settings.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
Return values: 
<Scenario>
SALone |
 
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
V3.5.10
Manual operation: 
See 
"Scenario = StandAlone"
Top