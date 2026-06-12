# CONFigureWCDMaSIGNiFADingCARRiercFSIMulatorRESTartMODE

Module: WCDMA Signaling
Source: 0fdc84f99db247e7.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:RESTart:MODE
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:RESTart:MODE 
<RestartMode>
Sets the restart mode of the fading simulator.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<RestartMode>
AUTO |
 
 MANual
AUTO
: fading automatically starts with the DL signal
MANual
: fading is started and restarted manually (see 
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
RESTart
)
*RST:
AUTO
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.30
V3.5.20: added suffix 
<c>
Options: 
R&S CMW-KS410, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Restart Event"
Top