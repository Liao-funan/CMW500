# CONFigureLTESIGNiCONNection[PCC]TMnoCMATrixMIMOMimoLINEline

Module: LTE Signaling
Source: 87c14f9137e94b95.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO TM 9 Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:MIMO<Mimo>:LINE<line>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CMATrix:MIMO<Mimo>:LINE<line> 
<h1xabs>, <h1xphi>, <h2xabs>, <h2xphi>, <h3xabs>, <h3xphi>, <h4xphi>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TM<no>:CMATrix:MIMO<Mimo>:LINE<line> 
<h1xabs>, <h1xphi>, <h2xabs>, <h2xphi>, <h3xabs>, <h3xphi>, <h4xphi>
Configures the coefficients of the user-defined 4x4 channel model for TM 9.
There are two types of parameters:
<hnmabs> defines the square of the magnitude of the channel coefficient nm:
<hnmabs> = (h
nm
)
2
The sum of all values in one matrix line must not be greater than 1. <h4xabs> is calculated automatically, so that the sum equals 1.
<hnmphi> defines the phase of the channel coefficient nm:
<hnmphi> = 
φ
(h
nm
)
A query returns <h1xabs>, <h1xphi>, <h2xabs>, ..., <h4xabs>, <h4xphi>.
Suffix: 
<no>
9
<line>
1..4
Selects the matrix line (value "x" in the other parameters)
<c>
1..4
<Mimo>
44
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
<h4xphi>
Range: 
0 deg  to  345 deg
Increment: 
15 deg
Default unit: 
deg
Return values: 
<h4xabs>
Range: 
0  to  1
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS540
Manual operation: 
See 
"Channel Matrix"
Top