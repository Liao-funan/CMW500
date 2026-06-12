# CONFigureGSMSIGNiNCELlTDSCdmaCELLn

Module: GSM Signaling
Source: c1dbcdc42afe4d3d.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell
 > 
CONFigure:GSM:SIGN<i>:NCELl:TDSCdma:CELL<n>
CONFigure:GSM:SIGN<i>:NCELl:TDSCdma:CELL<n> 
<Enable>, <Band>, <Channel>, <CellParameterID>[, <Measurement>]
Configures an entry of the neighbor cell list for TD-SCDMA.
Suffix: 
<n>
1..4
Number of the entry
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<Band>
OB1 |
 
 OB2 |
 
 OB3
OB1
: Band 1 (F), 1880.8 MHz to 1919.2 MHz
OB2
: Band 2 (A), 2010.8 MHz to 2024.2 MHz
OB3
: Band 3 (E), 2300.8 MHz to 2399.2 MHz
*RST:
OB1
<Channel>
Range: 
depends on operating band, see table below
*RST:
9404
<CellParameterID>
Scrambling code
Range: 
#H0  to  #H7F
*RST:
#H0
<Measurement>
OFF |
 
 ON
Enables or disables the MS neighbor cell measurement
*RST:
OFF
Example: 
See 
"Configuring Neighbor Cell and Reselection Parameters"
Firmware/Software: 
V3.2.20
V3.2.30 added <Measurement>
Manual operation: 
See 
"TD-SCDMA"
Channel number ranges depending on TD-SCDMA band
Band
Channel number
a (China)
10054 to 10121
e
11504 to 11996
f
9404 to 9596
Top