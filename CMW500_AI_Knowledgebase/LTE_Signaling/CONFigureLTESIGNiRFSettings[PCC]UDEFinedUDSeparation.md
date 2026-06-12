# CONFigureLTESIGNiRFSettings[PCC]UDEFinedUDSeparation

Module: LTE Signaling
Source: 0e8c22dd8440477f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
User-Defined Band
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:UDSeparation
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:UDSeparation 
<Frequency>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UDEFined:UDSeparation 
<Frequency>
Configures the UL/DL separation F
DL
 - F
UL
 for the user-defined band.
The allowed range depends on the remaining user-defined band settings: The resulting uplink carrier center frequencies must be within the allowed frequency range. For calculations, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
UDEFined:
​
FREQuency:
​
DL:
​
MINimum
.
Suffix: 
<c>
1..4
Parameters:
<Frequency>
Depending on the other settings, only a part of the following range is allowed.
Range: 
-5930E+6 Hz to 5930E+6 Hz
*RST:
190E+6 Hz
Default unit: 
Hz
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V2.1.30, SCC command V3.5.20
Options: 
R&S CMW-KS525
Manual operation: 
See 
"UL/DL Separation"
Top