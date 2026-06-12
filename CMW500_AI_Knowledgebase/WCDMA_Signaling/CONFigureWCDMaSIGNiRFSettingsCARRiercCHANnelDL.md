# CONFigureWCDMaSIGNiRFSettingsCARRiercCHANnelDL

Module: WCDMA Signaling
Source: e425f980aacf4a72.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:CHANnel:DL
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:CHANnel:DL 
<ChannelNumber>
Selects the DL channel number. The channel number must be valid for the current operating band, for dependencies see 
"Operating Bands"
.
The related UL channel number is calculated and set automatically. For multi-carrier scenarios, the channel numbers of the other carriers are calculated and set as well.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<ChannelNumber>
Range: 
depends on operating band
*RST:
carrier 1: 10563, carrier 2: 10588
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Operating Band, Channel, Frequency, Offset, UL/DL Separation"
Top