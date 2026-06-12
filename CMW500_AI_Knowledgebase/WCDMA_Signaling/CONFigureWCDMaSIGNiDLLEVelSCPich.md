# CONFigureWCDMaSIGNiDLLEVelSCPich

Module: WCDMA Signaling
Source: 4485044bbb8a4d7c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
R99 Channels
 > 
CONFigure:WCDMa:SIGN<i>:DL:LEVel:SCPich
CONFigure:WCDMa:SIGN<i>:DL:LEVel:SCPich 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:LEVel:SCCPch 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:LEVel:PICH 
<Level>
CONFigure:WCDMa:SIGN<i>:DL:LEVel:AICH 
<Level>
Set the level of the channel indicated by the last mnemonic. Setting a power level also activates the channel.
Parameters:
<Level>
Range: 
-80 dB to 0 dB, AICH: -50 dB to 0 dB
*RST:
S-CPICH: OFF (-3.3 dB), S-CCPCH: -5.3 dB, PICH: -8.3 dB, AICH: -8.3 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables the channel | enables the channel using the previous/default level)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V1.0.15.0
Options: 
For S-CPICH: R&S CMW-KS410
Top