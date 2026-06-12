# SENSeLTESIGNiCONNection[PCC]UDCHannelsULCRATeALL

Module: LTE Signaling
Source: d8dda73d5ffb4c70.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:UL:CRATe:ALL?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:UL:CRATe:ALL? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:UL:CRATe:ALL? 
Queries the code rate for all uplink subframes for the scheduling type "User-defined Channels".
Suffix: 
<c>
1..4
Return values: 
<CodeRate>
Comma-separated list of 10 values (subframe 0 to subframe 9)
Range: 
0  to  10
Example: 
See 
"Configuring User-Defined Channels"
Usage: 
Query only
Firmware/Software: 
V3.0.20, SCC command V3.5.20
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Code Rate"
Top