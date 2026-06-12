# ROUTeWCDMaSIGNiSCENarioDBFadingINTernal

Module: WCDMA Signaling
Source: 0f3e1f215e1b442f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading:INTernal 
<RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>[, <Fader1>[, <Fader2>]]
Activates the "Dual Carrier / Dual Band Fading: Internal" scenario and selects the signal paths.
To set the signaling unit manually, use the command 
ROUTe:
​
WCDMa:
​
SIGN<i>:
​
SCENario:
​
DBFading:
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
RF connector for the first output path
<TXConverter>
TX module for the first output path. Select different modules for the two paths.
<TX2Connector>
RF connector for the second output path
<TX2Converter>
TX module for the second output path
<Fader1>
Internal fader used for the output path of carrier one.
<Fader2>
Internal fader used for the output path of carrier two. Select different faders for the two carriers.
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