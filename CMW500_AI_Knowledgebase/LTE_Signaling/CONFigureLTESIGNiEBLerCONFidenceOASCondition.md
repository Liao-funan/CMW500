# CONFigureLTESIGNiEBLerCONFidenceOASCondition

Module: LTE Signaling
Source: 4a3e163fba6f4233.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Settings
 > 
CONFigure:LTE:SIGN<i>:EBLer:CONFidence:OASCondition
CONFigure:LTE:SIGN<i>:EBLer:CONFidence:OASCondition 
<Condition>
Configures the stop decision and the overall result calculation for confidence BLER measurements with carrier aggregation.
Parameters:
<Condition>
PCC |
 
 SCC1 |
 
 SCC2 |
 
 AC1St |
 
 ACWait
PCC
: PCC only
SCC1
: SCC1 only
SCC2
: SCC2 only
AC1St
: all carriers, stop on 1st fail
ACWait
: all carriers, wait for all CCs
*RST:
AC1S
Example: 
See 
"Configuring a BLER Measurement"
Firmware/Software: 
V3.2.80
V3.5.10: added SCC2
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Over All Stop Decision"
Top