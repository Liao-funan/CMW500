# CONFigureWCDMaMEASiCARRiercBAND

Module: WCDMA Measurements
Source: e32138717a6a4511.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WCDMa:MEAS<i>:CARRier<c>:BAND
CONFigure:WCDMa:MEAS<i>:CARRier<c>:BAND 
<Band>
Selects the operating band (OB).
For the combined signal path scenario, use:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CARRier<c>:
​
BAND
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
DBDC
Suffix: 
<c>
1..2
Selects the affected carrier - only relevant for dual band dual carrier measurement
Parameters:
<Band>
OB1 |
 
 ... |
 
 OB14 |
 
 OB19 |
 
 ... |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OBS1 |
 
 ... |
 
 OBS3 |
 
 OBL1
OB1
, ..., 
OB14
: operating band I to XIV
OB19
, ..., 
OB22
: operating band XIX to XXII
OB25
, 
OB26
: operating band XXV and XXVI
OBS1
: operating band S
OBS2
: operating band S 170 MHz
OBS3
: operating band S 190 MHz
OBL1
: operating band L
Default unit: 
OB1
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.4.11
V1.0.15.0: added 
OBS
V2.0.10: added 
OB19 to OB21
V2.1.20: added 
OBL1
V3.2.60: command renamed (added 
CARRier<c>
)
V3.2.70: added 
OB25, OB26
V3.2.80: added 
OB22
Options: 
R&S CMW-KM405 for dual band dual carrier HSDPA
Manual operation: 
See 
"Band / Channel / Frequency"
Top