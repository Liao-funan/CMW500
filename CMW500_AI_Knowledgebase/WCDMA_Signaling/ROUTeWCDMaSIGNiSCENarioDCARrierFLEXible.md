# ROUTeWCDMaSIGNiSCENarioDCARrierFLEXible

Module: WCDMA Signaling
Source: 523c55dfb00e4648.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:WCDMa:SIGN<i>:SCENario:DCARrier:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:DCARrier:FLEXible 
<BBBoard>, <RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>
Activates the scenario "Dual Carrier" and selects the signal paths.
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
R&S CMW-KS404
Manual operation: 
See 
"Scenario"
Top