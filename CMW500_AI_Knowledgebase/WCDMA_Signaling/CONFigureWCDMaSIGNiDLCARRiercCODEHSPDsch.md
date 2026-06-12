# CONFigureWCDMaSIGNiDLCARRiercCODEHSPDsch

Module: WCDMA Signaling
Source: 41ad4cfe902748f3.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-PDSCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:HSPDsch
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:HSPDsch 
<ChannelCode>
Sets the first channelization code number of the HS-PDSCH.
The number of assigned codes depends on the HSDPA channel configuration. For a fixed reference channel for example, it depends on the H-Set. For a user-defined channel, the number is configured directly.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<ChannelCode>
Range: 
0  to  16 - <number of assigned codes>
*RST:
1
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Channel Code"
Top