# ROUTeWCDMaSIGNiSCENarioDBFDiversityFLEXible[EXTernal]

Module: WCDMA Signaling
Source: f70fa611a38549c0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:FLEXible[:EXTernal] 
<BBBoard1>, <BBBoard2>, <RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>, <TX3Connector>, <TX3Converter>, <TX4Connector>, <TX4Converter>, <IQConnector>, <IQ2Connector>, <IQ3Connector>, <IQ4Connector>
Activates the "Dual Carrier / Dual Band RX Diversity Fading: External" scenario and selects the signal paths.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Parameters:
<BBBoard1>
First signaling unit
<BBBoard2>
Second signaling unit
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
<TXConnector>
RF connector for the first output path of the carrier one
<TXConverter>
TX module for the first output path of the carrier one. Select different modules for each of the paths.
<TX2Connector>
RF connector for the second output path of the carrier one
<TX2Converter>
TX module for the second output path of the carrier one
<TX3Connector>
RF connector for the first output path of the carrier two
<TX3Converter>
TX module for the first output path of the carrier two
<TX4Connector>
RF connector for the second output path of the carrier two
<TX4Converter>
TX module for the second output path of the carrier two
<IQConnector>
DIG IQ OUT connector for external fading of the first output path of the carrier one
<IQ2Connector>
DIG IQ OUT connector for external fading of the second output path of the carrier one
<IQ3Connector>
DIG IQ OUT connector for external fading of the first output path of the carrier two
<IQ4Connector>
DIG IQ OUT connector for external fading of the second output path of the carrier two
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS405, R&S CMW-KS410
Manual operation: 
See 
"Scenario"
Top