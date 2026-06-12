# CONFigureLTESIGNiNCELlGSMCELLn

Module: LTE Signaling
Source: f3057ba8836643f6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:GSM:CELL<n>
CONFigure:LTE:SIGN<i>:NCELl:GSM:CELL<n> 
<Enable>, <Band>, <Channel>[, <Measurement>]
Configures the entry number <n> of the neighbor cell list for GSM.
Suffix: 
<n>
1..4
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
Channel number used for the broadcast control channel (BCCH)
Range: 
0 to 1023, depending on GSM band, see table below
*RST:
20
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
V3.0.50
Options: 
R&S CMW-KS510 for neighbor cell measurements
Manual operation: 
See 
"GSM"
Channel number range depending on GSM band
Band
Channel number
G085
128 to 251
G09
0 to 124, 940 to 1023
G18
512 to 885
G19
512 to 810
Top