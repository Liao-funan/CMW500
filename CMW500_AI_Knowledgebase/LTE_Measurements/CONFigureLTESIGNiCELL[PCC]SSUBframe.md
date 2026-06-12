# CONFigureLTESIGNiCELL[PCC]SSUBframe

Module: LTE Measurements
Source: d2c43103ecfa4b89.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement
 > 
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SSUBframe
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SSUBframe 
<SpecialSubframe>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:SSUBframe 
<SpecialSubframe>
Selects a special subframe configuration, defining the inner structure of special subframes. This parameter is only relevant for TDD signals.
The special subframe configurations are defined in 3GPP TS 36.211, chapter 4, "Frame Structure".
See also 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
TDD:
​
SPECific
.
Suffix: 
<c>
1..7
Parameters:
<SpecialSubframe>
Value 8 and 9 can only be used with normal cyclic prefix.
Range: 
0  to  9
*RST:
7
Firmware/Software: 
V2.1.20, V3.5.10 value 9, V3.5.20 SCC command
Options: 
R&S CMW-KS550
R&S CMW-KS512 for value 7 plus extended cyclic prefix / for value 9 / for carrier-specific configuration
Manual operation: 
See 
"Special Subframe"
Top