# CONFigureGSMSIGNiNCELlGSMCELLn

Module: GSM Signaling
Source: 750e4276f7c54179.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell
 > 
CONFigure:GSM:SIGN<i>:NCELl:GSM:CELL<n>
CONFigure:GSM:SIGN<i>:NCELl:GSM:CELL<n> 
<Enable>, <Band>, <Channel>[, <Measurement>, <BSIC>]
Configures an entry of the neighbor cell list for GSM.
For channel number ranges depending on operating bands see 
Table "GSM operating bands and frequencies"
.
Suffix: 
<n>
1..16
Number of the entry
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G09
<Channel>
Channel number used for the broadcast control channel (BCCH), see 
"GSM Bands and Channels"
Range: 
depends on operating band
*RST:
20
<Measurement>
OFF |
 
 ON
Enables or disables the MS neighbor cell measurement
*RST:
OFF
<BSIC>
Base station identity code
Range: 
0  to  63
*RST:
0
Example: 
See 
"Configuring Neighbor Cell and Reselection Parameters"
Firmware/Software: 
V3.2.20
V3.2.30 added 
<Measurement>
V3.2.70: added 
<BSIC>
Manual operation: 
See 
"GSM"
Top