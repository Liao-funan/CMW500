# CONFigureWCDMaSIGNiCELLHSDPaUECategoryREPorted

Module: WCDMA Signaling
Source: c37f904c9f2f4500.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:UECategory:REPorted
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:UECategory:REPorted 
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
HSDPa:
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
1  to  24
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS401
Manual operation: 
See 
"UE Category"
Top