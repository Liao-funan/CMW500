# CONFigureWCDMaSIGNiDLCARRiercCODEEHICh

Module: WCDMA Signaling
Source: e2e2a9f9f00848eb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HSUPA DL Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:EHICh
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:EHICh 
<ChannelCode>
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:ERGCh 
<ChannelCode>
E-HICH and E-RGCH use the same channelization code number. Any of the two commands sets the channelization code number for both channels.
Suffix: 
<c>
1..*
Downlink carrier - only relevant for uplink multi-carrier scenarios
Parameters:
<ChannelCode>
Range: 
0  to  127
*RST:
6 for carrier 1, 5 for carrier 2
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Channel Code"
Top