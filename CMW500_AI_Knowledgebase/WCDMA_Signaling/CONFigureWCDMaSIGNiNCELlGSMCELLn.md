# CONFigureWCDMaSIGNiNCELlGSMCELLn

Module: WCDMA Signaling
Source: 047a8f507f0749a9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:WCDMa:SIGN<i>:NCELl:GSM:CELL<n>
CONFigure:WCDMa:SIGN<i>:NCELl:GSM:CELL<n> 
<Enable>, <Band>, <Channel>[, <Measurement>[, <BSIC>]]
Configures an entry of the neighbor cell list for GSM.
Suffix: 
<n>
1..16
Selects the GSM neighbor cell
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<Band>
G04 |
 
 G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 400, GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G09
<Channel>
Channel number used for the broadcast control channel (BCCH)
Range: 
0 to 1023, depending on GSM band, see table below
*RST:
20
<Measurement>
OFF |
 
 ON
Enables or disables the UE measurement
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
"Configuring Network Settings"
Firmware/Software: 
V3.0.20
V3.2.60: added <Measurement>, removed band GT081
V3.5.40: added 
BSIC
Manual operation: 
See 
"GSM"
Channel number ranges depending on GSM band
Band
Channel number
G04
259 to 340
G085
128 to 251
G09
0 to 124, 940 to 1023
G18
512 to 885
G19
512 to 810
Top