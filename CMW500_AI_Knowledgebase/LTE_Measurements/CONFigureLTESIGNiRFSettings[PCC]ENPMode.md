# CONFigureLTESIGNiRFSettings[PCC]ENPMode

Module: LTE Measurements
Source: e40f5512e8604c4b.htm

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
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPMode
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPMode 
<Mode>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
ENPower
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
UMARgin
Suffix: 
<c>
1..4
Parameters:
<Mode>
MANual |
 
 ULPC
MANual
The expected nominal power and margin are specified manually.
ULPC
The expected nominal power is calculated according to the UL power control settings. For the margin, 12 dB are applied.
*RST:
ULPC
Firmware/Software: 
V1.0.15.21, SCC command V3.5.20
Manual operation: 
See 
"Expected Nominal Power"
Top