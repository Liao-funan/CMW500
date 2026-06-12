# CONFigureLTESIGNiNCELlLTECELLn

Module: LTE Signaling
Source: 7e410d83f22d4b74.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:LTE:CELL<n>
CONFigure:LTE:SIGN<i>:NCELl:LTE:CELL<n> 
<Enable>, <Band>, <Channel>, <CellID>, <QOffset>[, <Measurement>]
Configures the entry number <n> of the neighbor cell list for LTE.
For channel number ranges depending on operating bands see 
"Operating Bands"
.
Note that only 5 entries with different channel numbers can be active at a time. Entries with the same channel number must have different cell IDs.
Suffix: 
<n>
1..16
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<Band>
OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
*RST:
OB1
<Channel>
Downlink channel number
Range: 
depends on operating band
*RST:
300
<CellID>
Physical layer cell ID
Range: 
0  to  503
*RST:
0
<QOffset>
N24 |
 
 N22 |
 
 N20 |
 
 N18 |
 
 N16 |
 
 N14 |
 
 N12 |
 
 N10 |
 
 N8 |
 
 N6 |
 
 N5 |
 
 N4 |
 
 N3 |
 
 N2 |
 
 N1 |
 
 ZERO |
 
 P1 |
 
 P2 |
 
 P3 |
 
 P4 |
 
 P5 |
 
 P6 |
 
 P8 |
 
 P10 |
 
 P12 |
 
 P14 |
 
 P16 |
 
 P18 |
 
 P20 |
 
 P22 |
 
 P24
Corresponds to value "q-OffsetCell" in 3GPP TS 36.331
N24 to N1
: -24 dB to -1 dB
ZERO
: 0 dB
P1 to P24
: 1 dB to 24 dB
*RST:
ZERO
<Measurement>
OFF |
 
 ON
Disables / enables neighbor cell measurements for the entry
ON is only allowed if also <Enable> = ON
*RST:
OFF
Example: 
See 
"Configuring Neighbor Cells and Reselection"
Firmware/Software: 
V3.0.10, some bands added in later versions
V3.0.50: added <Measurement>
Options: 
R&S CMW-KS510 for neighbor cell measurements
Manual operation: 
See 
"LTE"
Top