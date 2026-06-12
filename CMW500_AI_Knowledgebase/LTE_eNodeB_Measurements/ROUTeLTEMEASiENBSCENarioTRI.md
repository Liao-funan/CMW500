# ROUTeLTEMEASiENBSCENarioTRI

Module: LTE eNodeB Measurements
Source: f5898472c7fa41ee.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:LTE:MEAS<i>:ENB:SCENario:TRI
ROUTe:LTE:MEAS<i>:ENB:SCENario:TRI 
<RXConnector>, <RFConverter>, <RX2Connector>, <RF2Converter>
Activates the "Two RF In" scenario and selects the RF input path for the measured RF signals.
For possible connector and converter values, see 
"Values for RF Path Selection"
.
The scenario is not supported with an advanced frontend. It is also not supported by the R&S
 
CMW100.
Parameters:
<RXConnector>
RF connector for RF input 1
<RFConverter>
RX module for RF input 1
<RX2Connector>
RF connector for RF input 2
<RF2Converter>
RX module for RF input 2
Use the same RX module for both inputs
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.5.20
Top