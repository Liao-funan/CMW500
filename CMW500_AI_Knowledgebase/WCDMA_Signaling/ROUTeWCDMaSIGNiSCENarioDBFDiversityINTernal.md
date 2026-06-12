# ROUTeWCDMaSIGNiSCENarioDBFDiversityINTernal

Module: WCDMA Signaling
Source: db2fd6f926dc45a9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:INTernal 
<RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>, <TX3Connector>, <TX3Converter>, <TX4Connector>, <TX4Converter>[, <Fader1>[, <Fader2>]]
Activates the "Dual Carrier / Dual Band RX Diversity Fading: Internal" scenario and selects the signal paths.
To set the signaling unit manually, use the command 
ROUTe:
​
WCDMa:
​
SIGN<i>:
​
SCENario:
​
DBFDiversity:
​
FLEXible:
​
INTernal
 instead.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Parameters:
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
<Fader1>
Internal fader used for the second output path of carrier one.
<Fader2>
Internal fader used for the second output path of carrier two. Select different boards for the two carriers.
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS405, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Scenario"
Top