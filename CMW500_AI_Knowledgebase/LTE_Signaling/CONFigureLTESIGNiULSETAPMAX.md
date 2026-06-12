# CONFigureLTESIGNiULSETAPMAX

Module: LTE Signaling
Source: b52db2a0fbbf4573.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
General Power Control Parameters
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PMAX
CONFigure:LTE:SIGN<i>:UL:SETA:PMAX 
<Power>
CONFigure:LTE:SIGN<i>:UL:SETB:PMAX 
<Power>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PMAX 
<Power>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PMAX 
<Power>
Specifies the maximum allowed UE power.
Suffix: 
<c>
1..4
Parameters:
<Power>
Range: 
-30 dBm  to  33 dBm
*RST:
24 dBm
Default unit: 
dBm
Additional parameters: OFF | ON (disables | enables signaling of the value to the UE)
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.0.10, SCC V3.5.20, SETx V3.7.30
Manual operation: 
See 
"Max. allowed Power P-Max"
Top