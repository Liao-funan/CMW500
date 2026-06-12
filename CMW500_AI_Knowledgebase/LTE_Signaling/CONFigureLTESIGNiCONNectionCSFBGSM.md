# CONFigureLTESIGNiCONNectionCSFBGSM

Module: LTE Signaling
Source: 8e8e0f82bd564912.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:CSFB:GSM
CONFigure:LTE:SIGN<i>:CONNection:CSFB:GSM 
<Band>, <DLChannel>, <BandIndicator>
Configures the GSM target for MO CSFB.
Parameters:
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G09
<DLChannel>
Channel number used for the broadcast control channel (BCCH)
Range: 
0 to 1023, depending on GSM band, see table below
*RST:
20
<BandIndicator>
G18 |
 
 G19
Band indicator for distinction of GSM 1800 and GSM 1900 bands. The two bands partially use the same channel numbers for different frequencies.
*RST:
G18
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"CS Fallback (MO)"
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