# CONFigureLTESIGNiNCELlTDSCdmaCELLn

Module: LTE Signaling
Source: e924d9e015a44b19.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:TDSCdma:CELL<n>
CONFigure:LTE:SIGN<i>:NCELl:TDSCdma:CELL<n> 
<Enable>, <Band>, <Channel>, <ScramblingCode>[, <Measurement>]
Configures the entry number <n> of the neighbor cell list for TD-SCDMA.
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
OB1 |
 
 OB2 |
 
 OB3
OB1:
 Band 1 (F), channel 9400 to 9600
OB2:
 Band 2 (A), channel 10050 to 10125
OB3:
 Band 3 (E), channel 11500 to 12000
*RST:
OB1
<Channel>
Channel number
Range: 
9400 to 12000, depending on operating band
*RST:
9600
<ScramblingCode>
Cell parameter ID
Range: 
#H0  to  #H7F
*RST:
#H0
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
V3.2.20
Options: 
R&S CMW-KS510 for neighbor cell measurements
Manual operation: 
See 
"TD-SCDMA"
Top