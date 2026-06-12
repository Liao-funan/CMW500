# ROUTeLTEMEASiSCENarioCSPath

Module: LTE Measurements
Source: 0a5dfa8e079345e4.htm

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
ROUTe:LTE:MEAS<i>:SCENario:CSPath
ROUTe:LTE:MEAS<i>:SCENario:CSPath 
<Master>[, <Carrier>]
Activates the combined signal path scenario and selects the master application and carrier. The master controls most signal routing settings, analyzer settings and some measurement control settings while the combined signal path scenario is active.
Parameter <Carrier>:
Can be skipped for UL signals without CA. The PCC is selected automatically.
For non-contiguous uplink CA, select the component carrier to be measured.
For contiguous uplink CA, select the set of component carriers to be measured.
Parameters:
<Master>
String parameter selecting the master application
Example: 
'LTE Sig1'
 or 
'LTE Sig2'
<Carrier>
String parameter selecting an uplink carrier or a set of uplink carriers configured in the master application
Examples: 
'PCC'
, 
'SCC2'
, 
'Set A'
, 
'Set B'
Firmware/Software: 
V3.5.10, changed CA functionality in V3.7.30
Manual operation: 
See 
"Scenario = Combined Signal Path"
Top