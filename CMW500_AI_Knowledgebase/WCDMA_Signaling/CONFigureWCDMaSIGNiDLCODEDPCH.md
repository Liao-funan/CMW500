# CONFigureWCDMaSIGNiDLCODEDPCH

Module: WCDMA Signaling
Source: 60c0fd9ce2364dc8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
DPCH / F-DPCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CODE:DPCH
CONFigure:WCDMa:SIGN<i>:DL:CODE:DPCH 
<ChannelCode>
CONFigure:WCDMa:SIGN<i>:DL:CODE:FDPCh 
<ChannelCode>
Set the channelization code number of the channel indicated by the last mnemonic.
Parameters:
<ChannelCode>
Range: 
See table below
*RST:
See table below
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V1.0.15.0
V2.1.20: *RST values changed
V3.0.30: F-DPCH added
Options: 
For F-DPCH: R&S CMW-KS413
Manual operation: 
See 
"Code"
Channel
Minimum
Maximum
*RST
DPCH
0
depends on connection type and data rate
3
F-DPCH
0
255
6
Top