# ROUTeWCDMaSIGNiSCENarioDCFDiversityFLEXible[EXTernal]

Module: WCDMA Signaling
Source: 71cb6720fac84abe.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity:FLEXible[:EXTernal] 
<BBBoard>, <RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>, <IQConnector>, <IQ2Connector>
Activates the "Dual Carrier RX Diversity Fading: External" scenario and selects the signal paths.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Parameters:
<BBBoard>
Signaling unit
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
<TXConnector>
RF connector for the first output path
<TXConverter>
TX module for the first output path. Select different modules for the two paths.
<TX2Connector>
RF connector for the second output path
<TX2Converter>
TX module for the second output path
<IQConnector>
DIG IQ OUT connector for external fading of the first output path. Select different connectors for the two paths.
<IQ2Connector>
DIG IQ OUT connector for external fading of the second output path
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS404, R&S CMW-KS410
Manual operation: 
See 
"Scenario"
Top