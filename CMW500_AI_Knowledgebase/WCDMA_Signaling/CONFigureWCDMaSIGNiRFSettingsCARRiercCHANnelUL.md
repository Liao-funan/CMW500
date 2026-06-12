# CONFigureWCDMaSIGNiRFSettingsCARRiercCHANnelUL

Module: WCDMA Signaling
Source: 885578112f464111.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:CHANnel:UL
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:CHANnel:UL 
<ChannelNumber>
Selects the UL channel number. The channel number must be valid for the current operating band.
For dependencies, see 
"Operating Bands"
.
The related DL channel number is calculated and set automatically.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<ChannelNumber>
Range: 
depends on operating band
*RST:
9613
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.0.10
V3.2.10: command renamed (
CARRier<c>
 added)
Manual operation: 
See 
"Operating Band, Channel, Frequency, Offset, UL/DL Separation"
Top