# CONFigureLTESIGNiCELL[PCC]CIDEUTRan

Module: LTE Signaling
Source: bb3d26ded68e41b6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Identity Settings
 > 
CONFigure:LTE:SIGN<i>:CELL[:PCC]:CID:EUTRan
CONFigure:LTE:SIGN<i>:CELL[:PCC]:CID:EUTRan 
<CID>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:CID:EUTRan 
<CID>
Specifies the E-UTRAN cell identifier (28-digit binary number). If you use carrier aggregation, configure different values for the component carriers.
Suffix: 
<c>
1..4
Parameters:
<CID>
Range: 
#B0 to #B1111111111111111111111111111
*RST:
#B100000000 for PCC, #B100000001 for SCC1, #B100000010 for SCC2
Example: 
See 
"Configuring Other Network Settings"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"E-UTRAN Cell Identifier"
Top