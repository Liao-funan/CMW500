# CONFigureGSMSIGNiIQINPATHn

Module: GSM Signaling
Source: 4764b3c41d5d4ded.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:IQIN:PATH<n>
CONFigure:GSM:SIGN<i>:IQIN:PATH<n> 
<PEP>, <Level>
Specifies properties of the baseband signal at the I/Q input.
Suffix: 
<n>
1..2
Selects the path to be configured
Parameters:
<PEP>
Peak envelope power of the incoming baseband signal
Range: 
-60 dBFS  to  0 dBFS
Default unit: 
dBFS
<Level>
Average level of the incoming baseband signal (without noise)
Range: 
depends on crest factor and level of outgoing baseband signal
Default unit: 
dBFS
Example: 
See 
"Configuring the I/Q Settings"
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Baseband PEP (Out / In)"
Top