# CONFigureLTESIGNiDL[PCC]PBCHPOFFset

Module: LTE Signaling
Source: 0b93de24ec274cc1.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:PBCH:POFFset
CONFigure:LTE:SIGN<i>:DL[:PCC]:PBCH:POFFset 
<Offset>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:PBCH:POFFset 
<Offset>
Defines the power level of a physical broadcast channel (PBCH) resource element.
Suffix: 
<c>
1..4
Parameters:
<Offset>
PBCH power relative to RS EPRE
Range: 
-30 dB  to  0 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Configuring DL Power Levels"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"PBCH Power Offset"
Top