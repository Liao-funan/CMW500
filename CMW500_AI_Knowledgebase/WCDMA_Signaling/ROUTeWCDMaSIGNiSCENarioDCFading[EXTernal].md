# ROUTeWCDMaSIGNiSCENarioDCFading[EXTernal]

Module: WCDMA Signaling
Source: f5c9ceae6951499d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading[:EXTernal] 
<RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>, <IQConnector>, <IQ2Connector>
Activates the "Dual Carrier Fading: External" scenario and selects the signal paths.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Parameters:
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
V3.0.10
Options: 
R&S CMW-KS404 and R&S CMW-KS410
Manual operation: 
See 
"Scenario"
Top