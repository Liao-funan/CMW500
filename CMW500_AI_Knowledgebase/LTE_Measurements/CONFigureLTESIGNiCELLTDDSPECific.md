# CONFigureLTESIGNiCELLTDDSPECific

Module: LTE Measurements
Source: 284d1963a5634718.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement
 > 
CONFigure:LTE:SIGN<i>:CELL:TDD:SPECific
CONFigure:LTE:SIGN<i>:CELL:TDD:SPECific 
<UseSpecific>
Enables the carrier-specific configuration of the UL/DL configuration and of the special subframe configuration.
Enabled: Configuration per carrier via
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
ULDL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
SCC<c>:
​
ULDL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
SSUBframe
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
SCC<c>:
​
SSUBframe
Disabled: Global configuration via
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
ULDL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
SSUBframe
Parameters:
<UseSpecific>
OFF |
 
 ON
*RST:
OFF
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS550 and R&S CMW-KS512
Manual operation: 
See 
"Uplink Downlink"
Top