# CONFigureLTESIGNiCONNection[PCC]TMnoCMATrixEIGHtline

Module: LTE Signaling
Source: d922bbb5230e4b66.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO TM 9 Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:EIGHt<line>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:EIGHt<line> 
<h1xabs>, <h1xphi>, <h2xabs>, <h2xphi>, <h3xabs>, <h3xphi>, <h4xabs>, <h4xphi>, <h5xabs>, <h5xphi>, <h6xabs>, <h6xphi>, <h7xabs>, <h7xphi>, <h8xphi>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TM<no>:CMATrix:EIGHt<line> 
<h1xabs>, <h1xphi>, <h2xabs>, <h2xphi>, <h3xabs>, <h3xphi>, <h4xabs>, <h4xphi>, <h5xabs>, <h5xphi>, <h6xabs>, <h6xphi>, <h7xabs>, <h7xphi>, <h8xphi>
Configures the 8x2 channel coefficients for TM 9.
There are two types of parameters:
<hnmabs> defines the square of the magnitude of the channel coefficient nm:
<hnmabs> = (h
nm
)
2
The sum of all values in one matrix line must not be greater than 1. <h8xabs> is calculated automatically, so that the sum equals 1.
<hnmphi> defines the phase of the channel coefficient nm:
<hnmphi> = 
φ
(h
nm
)
A query returns <h1xabs>, <h1xphi>, <h2xabs>, ..., <h8xabs>, <h8xphi>.
Suffix: 
<no>
9
<line>
1, 2
Selects the matrix line (value "x" in the other parameters)
<c>
1..4
Parameters:
<h1xabs>
Range: 
0  to  1
<h1xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h2xabs>
Range: 
0  to  1
<h2xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h3xabs>
Range: 
0  to  1
<h3xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h4xabs>
Range: 
0  to  1
<h4xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h5xabs>
Range: 
0  to  1
<h5xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h6xabs>
Range: 
0  to  1
<h6xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h7xabs>
Range: 
0  to  1
<h7xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
<h8xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
Return values: 
<h8xabs>
Range: 
0  to  1
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.5.10
Options: 
R&S CMW-KS522
Manual operation: 
See 
"Channel Matrix"
Top