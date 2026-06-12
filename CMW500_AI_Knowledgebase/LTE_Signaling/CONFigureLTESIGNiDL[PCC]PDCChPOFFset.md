# CONFigureLTESIGNiDL[PCC]PDCChPOFFset

Module: LTE Signaling
Source: 9026d46db1474017.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:PDCCh:POFFset
CONFigure:LTE:SIGN<i>:DL[:PCC]:PDCCh:POFFset 
<Offset>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:PDCCh:POFFset 
<Offset>
Defines the power level of a physical downlink control channel (PDCCH) resource element.
Suffix: 
<c>
1..4
Parameters:
<Offset>
PDCCH power relative to RS EPRE
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
"PDCCH Power Offset"
Top