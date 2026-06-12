# CONFigureLTESIGNiCONNection[PCC]TMnoCMATrixTWOline

Module: LTE Signaling
Source: 527a329e09d84b70.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO TM 9 Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:TWO<line>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:TWO<line> 
<h1xabs>, <h1xphi>, <h2xphi>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TM<no>:CMATrix:TWO<line> 
<h1xabs>, <h1xphi>, <h2xphi>
Configures the 2x2 channel coefficients for TM 9.
The value <h2xabs> is calculated automatically from <h1xabs>, so that the sum of the values equals 1.
A query returns <h1xabs>, <h1xphi>, <h2xabs>, <h2xphi>.
Suffix: 
<no>
9
<line>
1, 2
Selects the matrix line (value "x" in the other parameters)
<c>
1..7
Parameters:
<h1xabs>
Square of magnitude of h
1x
Range: 
0  to  1
<h1xphi>
Phase of h
1x
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h2xphi>
Phase of h
2x
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
Return values: 
<h2xabs>
Square of magnitude of h
2x
Range: 
0  to  1
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.5.10
Options: 
R&S CMW-KS520
Manual operation: 
See 
"Channel Matrix"
Top