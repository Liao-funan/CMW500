# SENSeLTESIGNiCONNection[PCC]UDTTibasedULCRATeALL

Module: LTE Signaling
Source: d241d68d2c274cf6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL:CRATe:ALL?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL:CRATe:ALL? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:UL:CRATe:ALL? 
Queries the code rate for all uplink subframes, applicable to all scheduling types with a TTI-based UL definition.
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
"Configuring TTI-Based User-Defined Channels"
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