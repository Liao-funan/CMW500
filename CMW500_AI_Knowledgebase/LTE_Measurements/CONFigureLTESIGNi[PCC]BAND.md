# CONFigureLTESIGNi[PCC]BAND

Module: LTE Measurements
Source: ce6d69e22c8342b5.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:BAND
CONFigure:LTE:SIGN<i>[:PCC]:BAND 
<Band>
CONFigure:LTE:SIGN<i>:SCC<c>:BAND 
<Band>
Selects the operating band (OB). The allowed input range depends on the duplex mode (FDD or TDD).
Suffix: 
<c>
1..4
Parameters:
<Band>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB32 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB252 |
 
 OB255
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
OB29/32/46/67/69/252/255 only for SCC DL
Firmware/Software: 
V3.0.10, some bands added in later versions
V3.2.50: SCC command
Options: 
R&S CMW-KS525 for UDEFined, OB250, OB252, OB255
R&S CMW-KS514 for OB46
Manual operation: 
See 
"Band / Channel / Frequency"
Top