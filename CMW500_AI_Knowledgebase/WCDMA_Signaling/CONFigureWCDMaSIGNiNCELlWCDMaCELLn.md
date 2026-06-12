# CONFigureWCDMaSIGNiNCELlWCDMaCELLn

Module: WCDMA Signaling
Source: 7ab080f0bf5c421e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:WCDMa:SIGN<i>:NCELl:WCDMa:CELL<n>
CONFigure:WCDMa:SIGN<i>:NCELl:WCDMa:CELL<n> 
<Enable>, <Band>, <Channel>, <ScramblingCode>[, <Measurement>]
Configures an entry of the neighbor cell list for WCDMA.
For channel number ranges depending on operating bands see 
"Operating Bands"
.
Suffix: 
<n>
1..16
Selects the WCDMA neighbor cell
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
 
 OB14 |
 
 OB19 |
 
 ... |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OBS1 |
 
 ... |
 
 OBS3 |
 
 OBL1
OB1
, ..., 
OB14
: operating band I to XIV
OB19
, ..., 
OB22
: operating band XIX to XXII
OB25, OB26
: operating band XXV, XXVI
OB32
: operating band XXXII (restricted to dual band scenarios)
OBS1
: operating band S
OBS2
: operating band S 170 MHz
OBS3
: operating band S 190 MHz
OBL1
: operating band L
*RST:
OB1
<Channel>
Downlink channel number
Range: 
depends on operating band
*RST:
10562
<ScramblingCode>
Primary scrambling code
Range: 
#H0  to  #H1FF
*RST:
#H0
<Measurement>
OFF |
 
 ON
Enables or disables the UE measurement
*RST:
OFF
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V3.0.20
V3.2.60: added <Measurement>
V3.5.20: band range extended (OB19 and OB22 added)
V3.5.30: band range extended (OBSx and OBL1 added)
Manual operation: 
See 
"WCDMA FDD"
Top