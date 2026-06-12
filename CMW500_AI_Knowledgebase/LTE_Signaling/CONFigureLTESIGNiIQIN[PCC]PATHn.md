# CONFigureLTESIGNiIQIN[PCC]PATHn

Module: LTE Signaling
Source: 6e8123c82e0f4776.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:IQIN[:PCC]:PATH<n>
CONFigure:LTE:SIGN<i>:IQIN[:PCC]:PATH<n> 
<PEP>, <Level>
CONFigure:LTE:SIGN<i>:IQIN:SCC<c>:PATH<n> 
<PEP>, <Level>
Specifies properties of the baseband signal at the I/Q input for DL path number <n>.
Suffix: 
<n>
1..2
<c>
1..4
Parameters:
<PEP>
Peak envelope power of the incoming baseband signal
Range: 
-60 dBFS  to  0 dBFS
*RST:
0 dBFS
Default unit: 
dBFS
<Level>
Average level of the incoming baseband signal (without noise)
Range: 
depends on crest factor and level of outgoing baseband signal
Default unit: 
dBFS
Example: 
See 
"Configuring the I/Q Settings"
Firmware/Software: 
V3.0.10, SCC command V3.2.70
Manual operation: 
See 
"Baseband PEP (Out / In)"
Top