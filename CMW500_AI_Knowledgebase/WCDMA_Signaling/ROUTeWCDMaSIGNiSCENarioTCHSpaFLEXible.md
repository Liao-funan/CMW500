# ROUTeWCDMaSIGNiSCENarioTCHSpaFLEXible

Module: WCDMA Signaling
Source: a192d4d2831f4fb2.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:TCHSpa:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:TCHSpa:FLEXible 
<BBBoard1>, <BBBoard2>, <RXConnector>, <RXConverter>, <RX2Connector>, <RX2Converter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>, <TX3Connector>, <TX3Converter>
Activates the scenario "3C HSPA" and selects the signal paths.
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
RX module for the second input path.
<TXConnector>
RF connector for the first output path
<TXConverter>
TX module for the first output path
<TX2Connector>
RF connector for the second output path
<TX2Converter>
TX module for the second output path. Select different modules for the path one and two.
<TX3Connector>
RF connector for the third output path
<TX3Converter>
TX module for the third output path. Select different modules for the three paths or use the path one.
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS406
Manual operation: 
See 
"Scenario"
Top