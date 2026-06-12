# CONFigureLTESIGNiCONNection[PCC]BEAMformingMODE

Module: LTE Signaling
Source: 4abb2b79d49e466d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Beamforming Settings TM 7/8
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:BEAMforming:MODE
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:BEAMforming:MODE 
<Mode>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:BEAMforming:MODE 
<Mode>
Selects the beamforming mode for TM 7 and 8.
Depending on other settings, only a subset of the values is allowed, see:
TM 7: 
"Beamforming Mode"
TM 8: 
"Beamforming Mode"
Suffix: 
<c>
1..7
Parameters:
<Mode>
OFF |
 
 ON |
 
 TSBF |
 
 PMAT
OFF
: Beamforming is disabled
ON
: Beamforming is enabled. The configured beamforming matrix is used.
TSBF
: Beamforming is enabled. The beamforming matrix is selected randomly as defined in 3GPP TS 36.521, annex B.4.1 and B.4.2.
PMAT
: Beamforming is enabled. A precoding matrix is used as beamforming matrix, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection[:
​
PCC]:
​
PMATrix
.
*RST:
OFF
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.2.70, V3.5.40 PMAT added
Options: 
R&S CMW-KS520
Manual operation: 
See 
"Beamforming Mode"
Top