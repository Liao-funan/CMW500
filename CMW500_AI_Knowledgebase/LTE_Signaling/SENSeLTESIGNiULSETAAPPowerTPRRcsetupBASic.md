# SENSeLTESIGNiULSETAAPPowerTPRRcsetupBASic

Module: LTE Signaling
Source: c1ccb118f44b4041.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
SENSe:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:BASic? 
SENSe:LTE:SIGN<i>:UL:SETB:APPower:TPRRcsetup:BASic? 
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:TPRRcsetup:BASic? 
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:TPRRcsetup:BASic? 
Queries the state of P0-UE-PUSCH toggling, determining the P0-UE-PUSCH values signaled to the UE during RRC connection setup if basic UL power configuration applies.
Suffix: 
<c>
1..4
Return values: 
<Enable>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Configuring UL Power Control for Call Setup"
Usage: 
Query only
Firmware/Software: 
PCC V3.2.20, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Toggle P0-UE-PUSCH at RRC Setup"
Top