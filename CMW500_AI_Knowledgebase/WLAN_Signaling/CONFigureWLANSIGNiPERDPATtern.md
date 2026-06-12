# CONFigureWLANSIGNiPERDPATtern

Module: WLAN Signaling
Source: 5a13f47a316f44dc.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
PER Measurement
 > 
Measurement Settings
 > 
CONFigure:WLAN:SIGN<i>:PER:DPATtern
CONFigure:WLAN:SIGN<i>:PER:DPATtern 
<Pattern>
Selects the data that the R&S
 
CMW transfers to the DUT.
Parameters:
<Pattern>
PN1 |
 
 PN2 |
 
 PN3 |
 
 PN4 |
 
 PN5 |
 
 PN6 |
 
 PN7 |
 
 PN8 |
 
 PN9 |
 
 PN10 |
 
 PN11 |
 
 PN12 |
 
 PN13 |
 
 PN14 |
 
 PN15 |
 
 PN16 |
 
 PN17 |
 
 PN18 |
 
 PN19 |
 
 PN20 |
 
 PN21 |
 
 PN22 |
 
 PN23 |
 
 PN24 |
 
 PN25 |
 
 PN26 |
 
 PN27 |
 
 PN28 |
 
 PN29 |
 
 PN30 |
 
 PN31 |
 
 PN32 |
 
 PRANdom |
 
 AZERo |
 
 AONE |
 
 PT01 |
 
 PT10
PN1,...,PN32
: pseudo-noise bit sequences of different lengths
PRANdom
: random bit sequence
AZERo
: all zero pattern "000..."
AONE
: all one pattern "111..."
PT01
: alternating sequence starting with zero "010101..."
PT10
: alternating sequence starting with one "101010..."
*RST:
PN1
Example: 
See 
"Configuring a PER Measurement"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Data Pattern"
Top