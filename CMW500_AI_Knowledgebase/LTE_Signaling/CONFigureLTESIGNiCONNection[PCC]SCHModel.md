# CONFigureLTESIGNiCONNection[PCC]SCHModel

Module: LTE Signaling
Source: 7e247882dfc949ef.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Channel Model TM 2 to TM 6
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SCHModel
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SCHModel 
<h11abs>, <h11phi>, <h12phi>, <h21abs>, <h21phi>, <h22phi>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:SCHModel 
<h11abs>, <h11phi>, <h12phi>, <h21abs>, <h21phi>, <h22phi>
Configures the channel coefficients, characterizing the radio channel for MIMO 2x2.
Suffix: 
<c>
1..7
Parameters:
<h11abs>
Square of magnitude of h
11
Range: 
0  to  1
*RST:
1
<h11phi>
Phase of h
11
Range: 
0 deg  to  345 deg
Increment: 
15 deg
*RST:
0 deg
Default unit: 
deg
<h12phi>
Phase of h
12
Range: 
0 deg  to  345 deg
Increment: 
15 deg
*RST:
0 deg
Default unit: 
deg
<h21abs>
Square of magnitude of h
21
Range: 
0  to  1
*RST:
0
<h21phi>
Phase of h
21
Range: 
0 deg  to  345 deg
Increment: 
15 deg
*RST:
0 deg
Default unit: 
deg
<h22phi>
Phase of h
22
Range: 
0 deg  to  345 deg
Increment: 
15 deg
*RST:
0 deg
Default unit: 
deg
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V2.0.10, SCC command V3.2.50
Options: 
R&S CMW-KS520
Manual operation: 
See 
"2x2 channel model"
Top