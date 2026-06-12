# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEAGChUEID

Module: WCDMA Signaling
Source: c45038e2f3934e59.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-AGCH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:UEID
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:UEID 
<Primary>[, <Secondary>]
Specifies the primary [and secondary] E-RNTI of the UE.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Primary>
Range: 
#H0  to  #HFFFF
*RST:
#HAAAA
<Secondary>
Range: 
#H0  to  #HFFFF
*RST:
#H12AA
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Primary / Secondary UE-ID"
Top