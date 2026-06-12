# CONFigureLTESIGNiCONNection[PCC]PMATrix

Module: LTE Signaling
Source: 1b0eb02dd00c4b61.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General MIMO Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PMATrix
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PMATrix 
<Mode>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:PMATrix 
<Mode>
Selects the precoding matrix. The value must be compatible to the active scenario and transmission mode, see 
Table "Transmission scheme overview"
.
For TM 8 and TM 9, the matrix is used as beamforming matrix, not for precoding.
Suffix: 
<c>
1..7
Parameters:
<Mode>
PMI0 |
 
 PMI1 |
 
 PMI2 |
 
 PMI3 |
 
 PMI4 |
 
 PMI5 |
 
 PMI6 |
 
 PMI7 |
 
 PMI8 |
 
 PMI9 |
 
 PMI10 |
 
 PMI11 |
 
 PMI12 |
 
 PMI13 |
 
 PMI14 |
 
 PMI15 |
 
 RANDom_pmi
Matrix according to PMI 0, PMI 1, ... PMI15.
RANDom_pmi
: The PMI value is selected randomly as defined in 3GPP TS 36.521, annex B.4.1 and B.4.2.
*RST:
PMI0
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.0.10
V3.0.50: PMI2 to PMI15
V3.2.50: SCC command
V3.5.10: RANDom_pmi added
Options: 
R&S CMW-KS520 or -KS540
Manual operation: 
See 
"Precoding Matrix"
Top