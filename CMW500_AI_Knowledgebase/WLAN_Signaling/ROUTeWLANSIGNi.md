# ROUTeWLANSIGNi

Module: WLAN Signaling
Source: ea69599e08bd4add.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
General Settings
 > 
ROUTe:WLAN:SIGN<i>?
ROUTe:WLAN:SIGN<i>? 
Queries the active test scenario, the used TRX modules and the used RF connectors.
For the STANdard scenario, the first six parameters are returned. For the MIMO scenario, all eight parameters are returned.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Return values: 
<Scenario>
STANdard |
 
 MIMO
STANdard
Standard SISO scenario
MIMO
MIMO scenario
<Master>
For future use - returned value not relevant
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
<TXConnector>
RF connector for output path 1
<TXConverter>
TX module for output path 1
<TXConnector2>
RF connector for output path 2
<TXConverter2>
TX module for output path 2
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Scenario"
Top