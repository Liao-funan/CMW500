# CONFigureWCDMaMEASiUESignalCMPattern

Module: WCDMA Measurements
Source: ad09c1c98c4543d1.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
UE Signal Info Settings
 > 
CONFigure:WCDMa:MEAS<i>:UESignal:CMPattern
CONFigure:WCDMa:MEAS<i>:UESignal:CMPattern 
<PatternType>
Selects the expected TPC pattern for UL compressed mode.
For the combined signal path scenario, use:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CMODe:
​
ULCM:
​
TYPE
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CMODe:
​
ULCM:
​
ACTivation
Parameters:
<PatternType>
AR |
 
 AF |
 
 B
AR
: pattern A (rising TPC) defined in 3GPP TS 34.121, table 5.7.6
AF
: pattern A (falling TPC) defined in 3GPP TS 34.121, table 5.7.7
B
: pattern B defined in 3GPP TS 34.121, table 5.7.8
*RST:
AR
Example: 
See 
"Configuring  Measurement-Specific Settings"
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Pattern Type"
Top