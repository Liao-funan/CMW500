# SENSeLTESIGNiULSETAAPPowerPCALphaBASic

Module: LTE Signaling
Source: 96e9b79ce208458c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:BASic? 
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PCALpha:BASic? 
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PCALpha:BASic? 
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PCALpha:BASic? 
Queries the value of parameter "alpha", signaled to the UE if basic UL power configuration applies.
Suffix: 
<c>
1..4
Return values: 
<PathCompAlpha>
ZERO |
 
 DOT4 |
 
 DOT5 |
 
 DOT6 |
 
 DOT7 |
 
 DOT8 |
 
 DOT9 |
 
 ONE
ZERO
: 0
DOT4 ... DOT9
: 0.4 ... 0.9
ONE
: 1.0
Example: 
See 
"Configuring UL Power Control for Call Setup"
Usage: 
Query only
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Pathloss Compensation Alpha"
Top