# CONFigureLTESIGNiCONNectionROHCPROFiles

Module: LTE Signaling
Source: ebc5876065274b09.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:ROHC:PROFiles
CONFigure:LTE:SIGN<i>:CONNection:ROHC:PROFiles 
<Profile0x0001>, <Profile0x0002>, <Profile0x0004>
Enables header compression profiles. You can enable one or two profiles, but not all three profiles in parallel.
Parameters:
<Profile0x0001>
OFF |
 
 ON
Profile 1, for IP/UDP/RTP
*RST:
OFF
<Profile0x0002>
OFF |
 
 ON
Profile 2, for IP/UDP/...
*RST:
OFF
<Profile0x0004>
OFF |
 
 ON
Profile 4, for IP/...
*RST:
OFF
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Profile ..."
Top