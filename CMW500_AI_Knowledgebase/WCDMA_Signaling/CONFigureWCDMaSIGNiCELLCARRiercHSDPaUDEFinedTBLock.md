# CONFigureWCDMaSIGNiCELLCARRiercHSDPaUDEFinedTBLock

Module: WCDMA Signaling
Source: e5e119da89644eb8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
User-Defined Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSDPa:UDEFined:TBLock
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSDPa:UDEFined:TBLock 
<Index>
Specifies the value of the transport format and resource indicator (TFRI) signaled to the UE. A query returns also the resulting transport block size.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Index>
Transport block size index (TFRI value)
Range: 
0  to  62
*RST:
41
Return values: 
<Size>
Used transport block size resulting from the settings
Range: 
0 bits  to  28.8E+3 bits
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS411
Manual operation: 
See 
"Transport Block Size Index"
Top