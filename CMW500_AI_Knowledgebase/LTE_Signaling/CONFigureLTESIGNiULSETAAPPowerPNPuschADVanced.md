# CONFigureLTESIGNiULSETAAPPowerPNPuschADVanced

Module: LTE Signaling
Source: 0963f46968084374.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:ADVanced 
<P0NominalPUSCH>
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PNPusch:ADVanced 
<P0NominalPUSCH>
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PNPusch:ADVanced 
<P0NominalPUSCH>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PNPusch:ADVanced 
<P0NominalPUSCH>
Specifies the "p0-NominalPUSCH" value, signaled to the UE if advanced UL power configuration applies.
Suffix: 
<c>
1..4
Parameters:
<P0NominalPUSCH>
Range: 
-126 dBm  to  24 dBm
*RST:
-85 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"P0 Nominal PUSCH"
Top