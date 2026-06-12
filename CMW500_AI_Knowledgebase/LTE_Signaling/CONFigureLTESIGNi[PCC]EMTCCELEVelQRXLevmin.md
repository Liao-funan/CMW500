# CONFigureLTESIGNi[PCC]EMTCCELEVelQRXLevmin

Module: LTE Signaling
Source: ff02e76293ba4fbd.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
eMTC Settings
 > 
CE Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:QRXLevmin
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:QRXLevmin 
<level>, <Qrxlevmin>
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:QRXLevmin? 
<level>
Defines the Q
rxlevmin
 for CE level selection for PRACH. The value divided by two is signaled to the UE.
The value is defined per CE level. With increasing CE level, the Q
rxlevmin
 must decrease.
Parameters:
<Qrxlevmin>
Q
rxlevmin
 for the selected CE <level>
Range: 
-140 dBm  to  -44 dBm
Increment: 
2 dB
*RST:
<level> 1 to 3: -136 dBm, -138 dBm, -140 dBm
Parameters for setting and query: 
<level>
Selects a CE level
Range: 
1  to  3
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS590
Manual operation: 
See 
"Q rxlevmin"
Top