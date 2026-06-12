# ROUTeWCDMaSIGNiSCENarioSCFDiversityFLEXibleINTernal

Module: WCDMA Signaling
Source: 5183c2568a6547f4.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity:FLEXible:INTernal 
<BBBoard>, <RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>[, <Fader>]
Activates the "Standard Cell RX Diversity Fading: Internal" scenario and selects the signal paths.
For possible parameter values, see 
"Values for Signal Path Selection"
.
Parameters:
<BBBoard>
Signaling path
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
<Fader>
Internal fader
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS410, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Scenario"
Top