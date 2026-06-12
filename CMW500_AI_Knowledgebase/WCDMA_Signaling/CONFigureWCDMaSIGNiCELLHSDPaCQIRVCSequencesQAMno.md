# CONFigureWCDMaSIGNiCELLHSDPaCQIRVCSequencesQAMno

Module: WCDMA Signaling
Source: bb3ff30fdcc04fbe.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
CQI Test Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:RVCSequences:QAM<no>
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:RVCSequences:QAM<no> 
<Sequence>
Specifies an RV coding sequence to be used for signals with 16-QAM or 64-QAM modulation.
If 
UDEFined
 is selected, the sequence is defined via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
HSDPa:
​
CQI:
​
RVCSequences:
​
QAM<no>:
​
UDEFined
.
Suffix: 
<no>
16, 64
16-QAM or 64-QAM modulation
Parameters:
<Sequence>
S1 |
 
 S2 |
 
 S3 |
 
 S4 |
 
 S5 |
 
 S6 |
 
 S7 |
 
 UDEFined
S1
: {0}
S2
: {6}
S3
: {0, 2, 5, 6}
S4
: {6, 2, 1, 5}
S5
: {0, 0, 0, 0}
S6
: {6, 6, 6, 6}
S7
: {6, 0, 4, 5}
UDEFined
: user-defined sequence
*RST:
S4
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KS401 for 16-QAM
R&S CMW-KS403 for 64-QAM
Manual operation: 
See 
"RV Coding Sequences"
Top