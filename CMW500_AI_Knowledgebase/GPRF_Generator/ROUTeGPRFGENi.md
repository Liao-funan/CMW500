# ROUTeGPRFGENi

Module: GPRF Generator
Source: e733eafedbca43d0.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:GPRF:GEN<i>?
ROUTe:GPRF:GEN<i>? 
Returns the configured routing settings.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Return values: 
<Scenario>
SALone |
 
 IQOut
SALone:
 An RF signal is generated (standalone scenario)
IQOut:
 The generated baseband signal is sent to I/Q out (digital baseband interface)
<Master>
For future use - returned value not relevant
<TXConnector>
RF or DIG IQ OUT connector
<RFConverter>
TX or I/Q module
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Scenario and Routing"
Top