# CONFigureLTESIGNiCONNection[PCC]TM8CHMatrix

Module: LTE Signaling
Source: efd79af827da43c3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Beamforming Settings TM 7/8
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<8>:CHMatrix
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<8>:CHMatrix 
<abs11>, <phase11>, <abs12>, <phase12>, <abs21>, <phase21>, <abs22>, <phase22>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TM<8>:CHMatrix 
<abs11>, <phase11>, <abs12>, <phase12>, <abs21>, <phase21>, <abs22>, <phase22>
Configures the channel coefficients, characterizing the radio channel for TM 8.
Suffix: 
<c>
1..7
<8>
8
Parameters:
<abs11>
Square of magnitude of h
11
<abs11> + <abs12> must equal 1
Range: 
0  to  1
*RST:
1
<phase11>
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
<abs12>
Square of magnitude of h
12
Range: 
0  to  1
*RST:
1
<phase12>
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
<abs21>
Square of magnitude of h
21
<abs21> + <abs22> must equal 1
Range: 
0  to  1
*RST:
1
<phase21>
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
<abs22>
Square of magnitude of h
22
Range: 
0  to  1
*RST:
1
<phase22>
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
V3.5.40
Options: 
R&S CMW-KS520
Manual operation: 
See 
"Channel Matrix 2x2 TM8"
Top