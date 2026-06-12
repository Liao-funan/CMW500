# CONFigureLTESIGNiRFSettings[PCC]UDEFinedCHANnelDLMINimum

Module: LTE Signaling
Source: bfd317d28c574377.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
User-Defined Band
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:CHANnel:DL:MINimum
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:CHANnel:DL:MINimum 
<Channel>
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:CHANnel:DL:MAXimum 
<Channel>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UDEFined:CHANnel:DL:MINimum 
<Channel>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UDEFined:CHANnel:DL:MAXimum 
<Channel>
Configures channel numbers for the user-defined band: the minimum downlink channel number and the maximum downlink channel number.
Combinations that result in frequencies outside of the allowed range are corrected automatically.
Suffix: 
<c>
1..4
Parameters:
<Channel>
Range: 
0 to 262143
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V2.1.30, SCC commands V3.2.50
Options: 
R&S CMW-KS525
Manual operation: 
See 
"DL Channel, Frequency"
Top