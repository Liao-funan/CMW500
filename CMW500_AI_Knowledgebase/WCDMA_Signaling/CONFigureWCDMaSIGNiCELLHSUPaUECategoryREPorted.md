# CONFigureWCDMaSIGNiCELLHSUPaUECategoryREPorted

Module: WCDMA Signaling
Source: 898bdb525bff4433.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:UECategory:REPorted
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:UECategory:REPorted 
<UseReported>
Enable or disable usage of the UE category value reported by the UE.
When disabled, the UE category must be set manually, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
HSUPa:
​
UECategory:
​
MANual
. The manually set value is also used if no reported value is available.
Parameters:
<UseReported>
OFF |
 
 ON
*RST:
ON
Return values: 
<UECatReported>
UE category reported by the UE (NAV indicates that none has been reported)
Range: 
1  to  9
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
V3.2.60: range extended
Options: 
R&S CMW-KS401
Manual operation: 
See 
"UE Category"
Top