# CONFigureLTESIGNiULSETAAPPowerTPRRcsetupADVanced

Module: LTE Signaling
Source: 58924a5153544857.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:ADVanced 
<Enable>
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:TPRRcsetup:ADVanced 
<Enable>
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:TPRRcsetup:ADVanced 
<Enable>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:TPRRcsetup:ADVanced 
<Enable>
Enables or disables P0-UE-PUSCH toggling and thus determines the P0-UE-PUSCH values signaled to the UE during RRC connection setup if advanced UL power configuration applies.
Suffix: 
<c>
1..4
Parameters:
<Enable>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.2.20, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Toggle P0-UE-PUSCH at RRC Setup"
Top