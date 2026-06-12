# SENSeLTESIGNiULSETAAPPowerPNPuschBASic

Module: LTE Signaling
Source: c1b0ec85de994aff.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:BASic? 
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PNPusch:BASic? 
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PNPusch:BASic? 
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PNPusch:BASic? 
Queries the "p0-NominalPUSCH" value, signaled to the UE if basic UL power configuration applies.
Suffix: 
<c>
1..4
Return values: 
<P0NominalPUSCH>
Range: 
-126 dBm  to  24 dBm
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
"P0 Nominal PUSCH"
Top