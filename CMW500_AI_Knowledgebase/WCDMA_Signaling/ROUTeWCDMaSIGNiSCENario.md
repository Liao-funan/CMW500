# ROUTeWCDMaSIGNiSCENario

Module: WCDMA Signaling
Source: 2daa1a535b64408a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario?
ROUTe:WCDMa:SIGN<i>:SCENario? 
Returns the active scenario.
Return values: 
<Scenario>
SCELl |
 
 DCARrier |
 
 SCFading |
 
 DCFading |
 
 SCFDiversity |
 
 DCFDiversity |
 
 DBFading |
 
 DBFDiversity |
 
 DCHSpa |
 
 TCHSpa
SCEL
: "Standard Cell"
DCARrier
: "Dual Carrier"
SCFading
: "Standard Cell Fading"
DCFading
: "Dual Carrier Fading"
SCFDiversity
:"Standard Cell RX Diversity Fading"
DCFDiversity
: "Dual Carrier RX Diversity Fading"
DBFading
: "Dual Carrier / Dual Band Fading"
DBFDiversity
: "Dual Carrier / Dual Band RX Diversity Fading"
DCHSpa
: "Dual Carrier HSPA"
TCHSpa
: "3C HSPA"
<Fader>
EXTernal |
 
 INTernal
Only returned for internal fading scenarios, e.g. SCF, DCF
Indicates whether internal or external fading is active.
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.30: DCARrier added
V3.0.10: SCFading and DCFading added
V3.0.30: <Fader> added
V3.2.60: added scenarios SCFDiversity, DCFDiversity, DCHSpa
V3.5.20: added scenarios DBFading, DBFDiversity, TCHSp
Manual operation: 
See 
"Scenario"
Top