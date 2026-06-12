# CONFigureWCDMaSIGNiRFSettingsCARRiercDL

Module: WCDMA Signaling
Source: b0d611cbb07447c8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:DL
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:DL 
<Band>, <Channel>
Selects the operating band and the DL channel number. The channel number must be valid for the operating band, for dependencies see 
"Operating Bands"
.
The related UL channel number is calculated and set automatically. For scenarios with multi-carrier, the channel numbers of the other carriers are calculated and set as well.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Band>
OB1 |
 
 ... |
 
 OB14 |
 
 OB19 |
 
 ... |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OB32 |
 
 OBS1 |
 
 ... |
 
 OBS3 |
 
 OBL1 |
 
 UDEFined
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
UDEFined
: user defined
*RST:
OB1
<Channel>
Range: 
depends on operating band
*RST:
carrier 1: 10563, carrier 2: 10588
Return values: 
<Frequency>
A query returns band, channel number and corresponding carrier center frequency
Range: 
depends on operating band
*RST:
carrier 1: 2112.6E+6 Hz, carrier 2: 2117.6E+6 Hz
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.0.10
V3.2.70: added OB25
V3.5.30: added OB26, OB32.
Options: 
For S and L operating bands: R&S CMW-KS425
Manual operation: 
See 
"Operating Band, Channel, Frequency, Offset, UL/DL Separation"
Top