# ROUTeGSMSIGNiSCENario

Module: GSM Signaling
Source: c1f625ab0a0b4925.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:GSM:SIGN<i>:SCENario?
ROUTe:GSM:SIGN<i>:SCENario? 
Returns the active scenario.
Return values: 
<Scenario>
SCEL |
 
 IORI |
 
 BATC |
 
 SCF |
 
 SCFDiversity
SCEL
: "Standard Cell"
IORI
: "IQ out - RF in"
BATC
: "BCCH and TCH/PDCH"
SCF
: "Standard Cell Fading"
SCFDiversity
: "Standard Cell Fading with RX Diversity"
<Fader>
EXTernal |
 
 INTernal
Only returned for fading scenarios, e.g. SCF
Indicates whether internal or external fading is active.
Usage: 
Query only
Firmware/Software: 
V2.0.10
V3.0.10: BATC added
V3.0.20: added <Fader> and SCF
V3.5.20: added scenario SCFDiversity
Top