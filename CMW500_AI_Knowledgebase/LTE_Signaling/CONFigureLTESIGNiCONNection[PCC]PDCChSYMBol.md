# CONFigureLTESIGNiCONNection[PCC]PDCChSYMBol

Module: LTE Signaling
Source: 9b5a1ba06b0c4abc.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
PDCCH Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PDCCh:SYMBol
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PDCCh:SYMBol 
<PDCCH>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:PDCCh:SYMBol 
<PDCCH>
Configures the number of PDCCH symbols per normal subframe.
Suffix: 
<c>
1..4
Parameters:
<PDCCH>
AUTO |
 
 P1 |
 
 P2 |
 
 P3 |
 
 P4
AUTO
: automatic configuration depending on scheduling type
P1
 to 
P4
: 1, 2, 3, 4 symbols
*RST:
AUTO
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.2.82
Manual operation: 
See 
"PDCCH Symbol Config, #PDCCH Symbols"
Allowed values, depending on cell bandwidth
 
1.4 MHz
3 MHz
5 MHz
10 MHz
15 MHz
20 MHz
AUTO
 
 
 
X
X
X
P1
 
 
 
X
X
X
P2
 
X
X
X
X
X
P3
 
X
X
X
X
X
P4
X
 
 
 
 
 
Top