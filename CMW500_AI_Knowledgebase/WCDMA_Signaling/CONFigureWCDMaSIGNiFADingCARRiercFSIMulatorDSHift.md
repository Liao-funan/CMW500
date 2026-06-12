# CONFigureWCDMaSIGNiFADingCARRiercFSIMulatorDSHift

Module: WCDMA Signaling
Source: 20db91dfd70244e1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:DSHift
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:DSHift 
<Frequency>
Displays the maximum Doppler frequency for the fading simulator.
A setting is only allowed in 
USER
 mode (see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
FADing:
​
CARRier<c>:
​
FSIMulator:
​
DSHift:
​
MODE
).
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Frequency>
Range: 
1 Hz  to  2000 Hz
Default unit: 
Hz
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.30
V3.2.60: range changed, setting enabled
V3.5.20: added suffix 
<c>
Options: 
R&S CMW-KS410, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Doppler Frequency"
Top