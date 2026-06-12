# CONFigureGSMSIGNiCELLIPReduction

Module: GSM Signaling
Source: 52e94338a6774672.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Cell
 > 
CONFigure:GSM:SIGN<i>:CELL:IPReduction
CONFigure:GSM:SIGN<i>:CELL:IPReduction 
<Value>
Specifies the MS transmit level reduction for the RACH at the very beginning of the connection before the standard power control algorithm starts.
Parameters:
<Value>
0
: 10 dB
1
: 10 dB, for emergency calls no power reduction
Range: 
0  to  1
*RST:
0
ON (OFF) commands the MS to apply (not apply) the initial power reduction.
Example: 
See 
"Configuring Cell Parameters"
Firmware/Software: 
V3.2.70
Options: 
R&S CMW-KS210
Manual operation: 
See 
"Initial Power Reduction"
Top