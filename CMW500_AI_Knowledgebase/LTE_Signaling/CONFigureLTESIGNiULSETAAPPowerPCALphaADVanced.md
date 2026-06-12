# CONFigureLTESIGNiULSETAAPPowerPCALphaADVanced

Module: LTE Signaling
Source: c0058c0365c04ec3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:ADVanced 
<PathCompAlpha>
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PCALpha:ADVanced 
<PathCompAlpha>
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PCALpha:ADVanced 
<PathCompAlpha>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PCALpha:ADVanced 
<PathCompAlpha>
Specifies the value of parameter "alpha", signaled to the UE if advanced UL power configuration applies.
Suffix: 
<c>
1..4
Parameters:
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
*RST:
DOT8
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Pathloss Compensation Alpha"
Top