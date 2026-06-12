# SENSeLTESIGNiULSETAAPPowerPIRPowerBASic

Module: LTE Signaling
Source: 8dfddc3ceaf64716.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:BASic? 
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PIRPower:BASic? 
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PIRPower:BASic? 
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PIRPower:BASic? 
Queries the "preambleInitialReceivedTargetPower" value, signaled to the UE if basic UL power configuration applies.
Suffix: 
<c>
1..4
Return values: 
<TargetPower>
Range: 
-120 dBm  to  -90 dBm
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
"Preamble Initial Received Target Power"
Top