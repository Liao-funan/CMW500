# CONFigureLTESIGNiRFSettings[PCC]CHANnelDL

Module: LTE Signaling
Source: 9e4d3600163e4f17.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:CHANnel:DL
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:CHANnel:DL 
<Channel>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:CHANnel:DL 
<Channel>
Selects the DL channel number. It must be valid for the current operating band. The related UL channel number is calculated and set automatically.
By appending a Hz unit (e.g. Hz, kHz, MHz) to a setting command, you can set the channel via its center frequency (only integer numbers accepted). By appending a Hz unit to a query command, you can query the center frequency instead of the channel number.
For channel numbers and frequencies depending on operating bands, see 
"Operating Bands"
.
Suffix: 
<c>
1..4
Parameters:
<Channel>
Range: 
depends on operating band
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"Operating Band, Channel, Frequency"
Top