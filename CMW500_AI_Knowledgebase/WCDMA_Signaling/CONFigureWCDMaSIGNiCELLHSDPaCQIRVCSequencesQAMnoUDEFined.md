# CONFigureWCDMaSIGNiCELLHSDPaCQIRVCSequencesQAMnoUDEFined

Module: WCDMA Signaling
Source: 302c333d308f4bf0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
CQI Test Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:RVCSequences:QAM<no>:UDEFined
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:RVCSequences:QAM<no>:UDEFined 
<Length>, <Sequence>...
Specifies an RV coding sequence to be used for signals with 16-QAM or 64-QAM modulation if 
UDEFined
 is set via 
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
QAM<no>
.
Suffix: 
<no>
16, 64
16-QAM or 64-QAM modulation
Parameters:
<Length>
The first <Length> entries of the user defined coding sequence are used.
Range: 
1  to  8
*RST:
8
<Sequence>
Up to 8 values separated by commas.
If you specify n values, they overwrite the first n entries of the user-defined sequence.
Range: 
0  to  7
*RST:
0
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