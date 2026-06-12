# CONFigureLTESIGNiCONNection[PCC]BEAMformingMATRix

Module: LTE Signaling
Source: 14cda0bdd20d4495.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Beamforming Settings TM 7/8
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:BEAMforming:MATRix
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:BEAMforming:MATRix 
<b11phi>[, <b12phi>[, <b11abs>, <b12abs>, <b21phi>, <b22phi>[, <b13phi>, <b14phi>[, <b13abs>, <b14abs>, <b23phi>, <b24phi>]]]]
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:BEAMforming:MATRix 
<b11phi>[, <b12phi>[, <b11abs>, <b12abs>, <b21phi>, <b22phi>[, <b13phi>, <b14phi>[, <b13abs>, <b14abs>, <b23phi>, <b24phi>]]]]
Configures the beamforming matrix coefficients for TM 7 and TM 8.
There are two types of parameters:
<bnmabs> defines the square of the magnitude of the coefficient nm:
<bnmabs> = (b
nm
)
2
<bnmphi> defines the phase of the coefficient nm:
<bnmphi> = 
φ
(b
nm
)
The phase can be entered in steps of 15 degrees. The setting is rounded, if necessary.
Depending on the size of your matrix, use the following parameters:
1x1: <b11phi>
1x2: <b11phi>, <b12phi>
2x2: <b11phi>, <b12phi>, <b11abs>, <b12abs>, <b21phi>, <b22phi>
The last six parameters are for future use and can always be omitted.
Suffix: 
<c>
1..7
Parameters:
<b11phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b12phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b11abs>
Range: 
0  to  1
<b12abs>
Range: 
0  to  1
<b21phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b22phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b13phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b14phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b13abs>
Range: 
0  to  1
<b14abs>
Range: 
0  to  1
<b23phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
<b24phi>
Range: 
0 deg  to  345 deg
Default unit: 
deg
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.2.70
Options: 
R&S CMW-KS520
Manual operation: 
See 
"Beamforming Matrix"
Top