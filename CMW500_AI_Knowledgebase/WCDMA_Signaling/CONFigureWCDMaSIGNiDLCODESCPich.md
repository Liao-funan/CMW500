# CONFigureWCDMaSIGNiDLCODESCPich

Module: WCDMA Signaling
Source: 451fc2a67a924d27.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
R99 Channels
 > 
CONFigure:WCDMa:SIGN<i>:DL:CODE:SCPich
CONFigure:WCDMa:SIGN<i>:DL:CODE:SCPich 
<ChannelCode>
CONFigure:WCDMa:SIGN<i>:DL:CODE:SCCPch 
<ChannelCode>
CONFigure:WCDMa:SIGN<i>:DL:CODE:PICH 
<ChannelCode>
CONFigure:WCDMa:SIGN<i>:DL:CODE:AICH 
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
Options: 
For S-CPICH: R&S CMW-KS410
Channel
Minimum
Maximum
*RST
S-CPICH
0
255
11
S-CCPCH
0
63
2
PICH
0
255
2
AICH
0
255
3
Top