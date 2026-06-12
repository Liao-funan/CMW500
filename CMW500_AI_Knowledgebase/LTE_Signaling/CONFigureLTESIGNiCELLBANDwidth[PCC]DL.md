# CONFigureLTESIGNiCELLBANDwidth[PCC]DL

Module: LTE Signaling
Source: 1e30774c3cb54de2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Physical Cell Setup
 > 
General Settings
 > 
CONFigure:LTE:SIGN<i>:CELL:BANDwidth[:PCC]:DL
CONFigure:LTE:SIGN<i>:CELL:BANDwidth[:PCC]:DL 
<Bandwidth>
CONFigure:LTE:SIGN<i>:CELL:BANDwidth:SCC<c>:DL 
<Bandwidth>
Defines the DL cell bandwidth. The PCC DL bandwidth is also used for the UL.
Suffix: 
<c>
1..7
Parameters:
<Bandwidth>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
B014:
 1.4 MHz
B030:
 3 MHz
B050:
 5 MHz
B100:
 10 MHz
B150:
 15 MHz
B200:
 20 MHz
*RST:
B100
Example: 
See 
"Configuring Physical Cell Setup"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"DL / UL Cell Bandwidth"
Top