# CONFigureWCDMaSIGNiIQINCARRierc

Module: WCDMA Signaling
Source: 29b3d60ab06b4167.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:IQIN:CARRier<c>
CONFigure:WCDMa:SIGN<i>:IQIN:CARRier<c> 
<PEP>, <Level>
Specifies properties of the baseband signal at the I/Q input.
Suffix: 
<c>
1..*
Downlink carrier
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
V3.0.10
Manual operation: 
See 
"Baseband PEP (Out / In)"
Top