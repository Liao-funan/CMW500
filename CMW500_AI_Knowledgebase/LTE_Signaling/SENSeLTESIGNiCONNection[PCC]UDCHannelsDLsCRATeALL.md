# SENSeLTESIGNiCONNection[PCC]UDCHannelsDLsCRATeALL

Module: LTE Signaling
Source: 995b9aea208f42a8.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:DL<s>:CRATe:ALL?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:DL<s>:CRATe:ALL? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:DL<s>:CRATe:ALL? 
Queries the code rate for all downlink subframes for the scheduling type "User-defined Channels".
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<CodeRate>
Comma-separated list of 10 values (subframe 0 to subframe 9)
Range: 
0  to  50
Example: 
See 
"Configuring User-Defined Channels"
Usage: 
Query only
Firmware/Software: 
V3.0.20, SCC command V3.2.50
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Code Rate"
Top