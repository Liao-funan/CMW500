# ROUTeGSMSIGNi

Module: GSM Signaling
Source: 20520c142bc946b1.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:GSM:SIGN<i>?
ROUTe:GSM:SIGN<i>? 
Returns the configured routing settings. The number of returned values depends on the active scenario (6 to 10 values).
For possible connector, converter and fader values, see 
"Values for Signal Path Selection"
.
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
<Controller>
For future use - returned value not relevant
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
<TXConnector1>
RF or DIG IQ OUT connector for output path 1
<TXConverter1>
TX or I/Q module for output path 1
<TXConnector2>
RF connector for output path 2, only returned for scenarios with two RF output paths
<TXConverter2>
TX module for output path 2, only returned for scenarios with two RF output paths
<IQ1Connector>
DIG IQ OUT connector for the first output path, only returned for scenarios with external fading
<IQ2Connector>
DIG IQ OUT connector for the second output path, only returned for scenarios with external fading with two paths
<Fader>
I/Q board used for internal fading
Usage: 
Query only
Firmware/Software: 
V2.0.10, added several return values in later versions
V3.5.20: added scenario SCFDiversity, <IQ2Connector>, <Fader>
Top