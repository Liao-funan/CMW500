# CONFigureDATACONTrolIMS2VIRTualsubvFORWard

Module: Data Application Unit
Source: c51a013dfd434963.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Virtual Subscriber Settings
 > 
Basic Profile Settings
 > 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:FORWard
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:FORWard 
<IPAddress>, <Port>, <CmdPort>, <AMRAlign>
Configures an external media endpoint.
Suffix: 
<v>
1..20
Parameters:
<IPAddress>
IPv4 or IPv6 address of the media endpoint as string
*RST:
'172.22.2.2'
<Port>
Port for RTP packet forwarding
*RST:
1000
<CmdPort>
Port for the command interface to the media endpoint
*RST:
1000
<AMRAlign>
OCTetaligned |
 
 BANDwidtheff
AMR alignment mode used by the media endpoint
OCTetaligned
: octet-aligned
BANDwidtheff
: bandwidth-efficient
*RST:
BAND
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"IP"
Top