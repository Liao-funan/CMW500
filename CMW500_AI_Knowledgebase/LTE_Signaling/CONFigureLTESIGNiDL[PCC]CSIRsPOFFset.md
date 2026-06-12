# CONFigureLTESIGNiDL[PCC]CSIRsPOFFset

Module: LTE Signaling
Source: 466a03091bc244de.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:CSIRs:POFFset
CONFigure:LTE:SIGN<i>:DL[:PCC]:CSIRs:POFFset 
<Offset>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:CSIRs:POFFset 
<Offset>
Sets the EPRE of the PDSCH relative to the EPRE of the CSI reference signal.
The value is only used for 
CONFigure:
​
LTE:
​
SIGN<i>:
​
DL:
​
SCC<c>:
​
CSIRs:
​
MODE
 = 
ACSirs
.
Suffix: 
<c>
1..4
Parameters:
<Offset>
Range: 
-30 dB  to  8 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Configuring DL Power Levels"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS520 or -KS540
Manual operation: 
See 
"CSI-RS"
Top