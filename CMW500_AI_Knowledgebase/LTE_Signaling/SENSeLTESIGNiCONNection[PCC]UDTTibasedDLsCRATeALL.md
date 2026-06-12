# SENSeLTESIGNiCONNection[PCC]UDTTibasedDLsCRATeALL

Module: LTE Signaling
Source: 2b07ca5263ed4863.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>:CRATe:ALL?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>:CRATe:ALL? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:DL<s>:CRATe:ALL? 
Queries the code rate for all downlink subframes for the scheduling type "User-defined TTI-Based".
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
"Configuring TTI-Based User-Defined Channels"
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