# CONFigureLTESIGNiULSETAAPPowerRSPowerADVanced

Module: LTE Signaling
Source: 9ace9b9cdec540c7.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:RSPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:RSPower:ADVanced 
<RefSignalPower>
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:RSPower:ADVanced 
<RefSignalPower>
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:RSPower:ADVanced 
<RefSignalPower>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:RSPower:ADVanced 
<RefSignalPower>
Specifies the "referenceSignalPower" value, signaled to the UE if advanced UL power configuration applies.
Suffix: 
<c>
1..4
Parameters:
<RefSignalPower>
Range: 
-60 dBm  to  50 dBm
*RST:
18 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Reference Signal Power"
Top