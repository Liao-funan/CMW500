# CONFigureLTEMEASiBAND

Module: LTE Measurements
Source: 0a4b728d7a7e446c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:BAND
CONFigure:LTE:MEAS<i>:BAND 
<Band>
Selects the operating band (OB). The allowed input range depends on the duplex mode (FDD or TDD).
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>[:
​
PCC]:
​
BAND
CONFigure:
​
LTE:
​
SIGN<i>:
​
SCC<c>:
​
BAND
Parameters:
<Band>
FDD: OB1 |
 
 ... |
 
 OB28 |
 
 OB30 |
 
 OB31 |
 
 OB65 |
 
 OB66 |
 
 OB68 |
 
 OB70 |
 
 OB71
TDD: OB33 | ... | OB45 | OB48 | OB250
*RST:
OB1 (OB33 for TDD)
Firmware/Software: 
V1.0.10.1, some bands added in later versions
Manual operation: 
See 
"Band / Channel / Frequency"
Top