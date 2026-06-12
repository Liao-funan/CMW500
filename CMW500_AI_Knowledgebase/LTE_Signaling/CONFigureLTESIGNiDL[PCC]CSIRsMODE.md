# CONFigureLTESIGNiDL[PCC]CSIRsMODE

Module: LTE Signaling
Source: f3ee70b633144728.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:CSIRs:MODE
CONFigure:LTE:SIGN<i>:DL[:PCC]:CSIRs:MODE 
<Mode>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:CSIRs:MODE 
<Mode>
Selects a configuration mode for the used CSI-RS power offset.
Suffix: 
<c>
1..4
Parameters:
<Mode>
ACSirs |
 
 MANual
ACSirs
The used power offset matches the signaled value.
For configuration of the signaled value, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
SCC<c>:
​
TM<no>:
​
CSIRs:
​
POWer
.
MANual
The used power offset is independent from the signaled value.
For configuration of the used power offset, see 
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
POFFset
.
*RST:
ACS
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