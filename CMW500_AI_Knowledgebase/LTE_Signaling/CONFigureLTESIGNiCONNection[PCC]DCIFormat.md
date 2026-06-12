# CONFigureLTESIGNiCONNection[PCC]DCIFormat

Module: LTE Signaling
Source: 4c829c17e8cd43f2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General MIMO Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:DCIFormat
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:DCIFormat 
<DCI>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:DCIFormat 
<DCI>
Selects the DCI format. The value must be compatible to the transmission mode, see 
Table "Transmission scheme overview"
.
Suffix: 
<c>
1..7
Parameters:
<DCI>
D1 |
 
 D1A |
 
 D1B |
 
 D2 |
 
 D2A |
 
 D2B |
 
 D2C |
 
 D61
Format 1, 1A, 1B, 2, 2A, 2B, 2C, 6-1A/B
*RST:
D1A
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.2.70, V3.5.10 added D2C, V3.7.10 added D61
Manual operation: 
See 
"DCI Format"
Top