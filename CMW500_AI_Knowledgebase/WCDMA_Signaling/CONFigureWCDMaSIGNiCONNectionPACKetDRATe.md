# CONFigureWCDMaSIGNiCONNectionPACKetDRATe

Module: WCDMA Signaling
Source: db4803399a694c09.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Packet Data Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:DRATe
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:DRATe 
<Downlink>, <Uplink>
Specifies data rates for end-to-end data connections in downlink and uplink direction.
Parameters:
<Downlink>
R8 |
 
 R16 |
 
 R32 |
 
 R64 |
 
 R128 |
 
 R384 |
 
 HSDPa
R8
 to 
R384
: 8 kbps to 384 kbps
HSDPa
: HSDPA connection
*RST:
R384
<Uplink>
R8 |
 
 R16 |
 
 R32 |
 
 R64 |
 
 R128 |
 
 R384 |
 
 HSUPa
R8
 to 
R384
: 8 kbps to 384 kbps
HSUPa
: HSUPA connection
*RST:
R384
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401 for HSDPa and HSUPa
Manual operation: 
See 
"Data Rate"
Top