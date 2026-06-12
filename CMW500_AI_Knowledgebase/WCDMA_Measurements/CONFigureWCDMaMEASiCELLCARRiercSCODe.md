# CONFigureWCDMaMEASiCELLCARRiercSCODe

Module: WCDMA Measurements
Source: d984eec169a94dbc.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Signal and Measurement Control Parameters
 > 
CONFigure:WCDMa:MEAS<i>:CELL:CARRier<c>:SCODe
CONFigure:WCDMa:MEAS<i>:CELL:CARRier<c>:SCODe 
<Code>
Specifies index i for calculation of the primary downlink scrambling code number by multiplication with 16.
For the combined signal path scenario, use 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
CARRier<c>:
​
SCODe
.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Code>
Range: 
#H0  to  #H1FF
*RST:
#H0
Example: 
See 
"Configuring Required Signal Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Manual operation: 
See 
"DL Scrambling Code"
Top