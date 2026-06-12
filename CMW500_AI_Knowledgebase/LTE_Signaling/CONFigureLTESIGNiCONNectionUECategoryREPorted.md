# CONFigureLTESIGNiCONNectionUECategoryREPorted

Module: LTE Signaling
Source: 2c8d6a2fbffb4e08.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:UECategory:REPorted
CONFigure:LTE:SIGN<i>:CONNection:UECategory:REPorted 
<UseReported>
Enables or disables the usage of the UE category value reported by the UE.
When disabled, the UE category must be set manually, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
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
Example: 
See 
"Configuring General Connection Settings Part 1"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"UE Category"
Top