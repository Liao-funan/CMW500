# CONFigureLTESIGNiRFSettings[PCC]UDEFinedCHANnelULMAXimum

Module: LTE Signaling
Source: d2153ccaeec54921.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
User-Defined Band
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:CHANnel:UL:MAXimum?
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:CHANnel:UL:MAXimum? 
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UDEFined:CHANnel:UL:MAXimum? 
Queries the maximum uplink channel number for the user-defined band, resulting from the other channel number settings.
Suffix: 
<c>
1..4
Return values: 
<Channel>
Maximum uplink channel number
CHAN:UL:MAX = CHAN:UL:MIN + CHAN:DL:MAX - CHAN:DL:MIN
Example: 
See 
"Configuring Operating Bands and Channels"
Usage: 
Query only
Firmware/Software: 
V2.1.30, SCC command V3.5.20
Options: 
R&S CMW-KS525
Manual operation: 
See 
"UL Channel, Frequency"
Top