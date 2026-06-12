# SENSeLTESIGNiULSETAAPPowerRSPowerBASic

Module: LTE Signaling
Source: a15ff9f678af4930.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
SENSe:LTE:SIGN<i>:UL:SETA:APPower:RSPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:RSPower:BASic? 
SENSe:LTE:SIGN<i>:UL:SETB:APPower:RSPower:BASic? 
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:RSPower:BASic? 
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:RSPower:BASic? 
Queries the "referenceSignalPower" value, signaled to the UE if basic UL power configuration applies.
Suffix: 
<c>
1..4
Return values: 
<RefSignalPower>
Range: 
-60 dBm  to  50 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Control for Call Setup"
Usage: 
Query only
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Reference Signal Power"
Top