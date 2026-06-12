# ROUTeWCDMaSIGNiSCENarioDCHSpaFLEXible

Module: WCDMA Signaling
Source: 31afed32147b445c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DCHSpa:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:DCHSpa:FLEXible 
<BBBoard1>, <BBBoard2>, <RXConnector>, <RXConverter>, <RX2Connector>, <RX2Converter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>
Activates the scenario "Dual Carrier HSPA" and selects the signal paths.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Parameters:
<BBBoard1>
First signaling unit
<BBBoard2>
Second signaling unit
<RXConnector>
RF connector for the first input path
<RXConverter>
RX module for the first input path
<RX2Connector>
RF connector for the second input path
<RX2Converter>
TX module for the second input path. Multi-band operation requires different modules for the two paths.
<TXConnector>
RF connector for the first output path
<TXConverter>
TX module for the first output path
<TX2Connector>
RF connector for the second output path
<TX2Converter>
TX module for the second output path. Multi-band operation requires different modules for the two paths.
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS405
Manual operation: 
See 
"Scenario"
Top