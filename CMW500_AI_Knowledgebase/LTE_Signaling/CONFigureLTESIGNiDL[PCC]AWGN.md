# CONFigureLTESIGNiDL[PCC]AWGN

Module: LTE Signaling
Source: 3e6c310cea3f4c09.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:AWGN
CONFigure:LTE:SIGN<i>:DL[:PCC]:AWGN 
<AWGN>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:AWGN 
<AWGN>
Specifies the total level of the additional white Gaussian noise (AWGN) interferer. The unit dBm/15 kHz indicates the spectral density integrated across one subcarrier.
The range depends on several parameters. It either equals the range of the RS EPRE or is a part of this range.
Suffix: 
<c>
1..4
Parameters:
<AWGN>
Range: 
depends on many parameters
*RST:
-98 dBm/15kHz, OFF
Default unit: 
dBm/15kHz
Additional parameters: OFF | ON (disables | enables the AWGN interferer)
Example: 
See 
"Configuring DL Power Levels"
Firmware/Software: 
V1.0.15.21, SCC command V3.2.50
Options: 
R&S CMW-KS510
Manual operation: 
See 
"AWGN"
Top