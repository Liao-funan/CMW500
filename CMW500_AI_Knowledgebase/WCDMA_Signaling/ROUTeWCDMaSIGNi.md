# ROUTeWCDMaSIGNi

Module: WCDMA Signaling
Source: 02d16b4457df4c75.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>?
ROUTe:WCDMa:SIGN<i>? 
Returns the configured routing settings. The number of returned values depends on the active scenario (6 to 18 values).
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
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
: "Standard Cell RX Diversity Fading"
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
<Master>
For future use - returned value not relevant
<RXConnector>
RF connector for input path 1
<RXConverter>
RX module for input path 1
<RX2Connector>
RF connector for input path 2
<RX2Converter>
RX module for input path 2
<TXConnector>
RF connector for output path 1
<TXConverter>
TX module for output path 1
<TX2Connector>
RF connector for output path 2
<TX2Converter>
TX module for output path 2
<TX3Connector>
RF connector for output path 2
<TX3Converter>
TX module for output path 2
<TX4Connector>
RF connector for output path 3
<TX4Converter>
TX module for output path 4
<IQConnector>
DIG IQ OUT connector for output path 1
<IQ2Connector>
DIG IQ OUT connector for output path 2
<IQ3Connector>
DIG IQ OUT connector for output path 3
<IQ4Connector>
DIG IQ OUT connector for output path 4
<Fader>
I/Q board with I/Q connectors
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.30: added <TX2Connector>, <TX2Converter> and scenario DCARrier
V3.0.10: added <IQConnector>, <IQ2Connector> and scenarios SCFading, DCFading
V3.2.60: added scenarios SCFDiversity, DCFDiversity, DCHSpa
V3.5.20: added scenarios DBFading, DBFDiversity, TCHSp
V3.5.50: added scenarios <RX2Connector>, <RX2Converter>, <TX3Connector>, <TX3Converter>, <TX4Connector>, <TX4Converter>, <IQ3Connector>, <IQ4Connector>, <Fader>
Manual operation: 
See 
"Scenario"
Top