# ROUTeGSMSIGNiSCENarioBATChFLEXible

Module: GSM Signaling
Source: 5018c752c7344aa9.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
 > 
ROUTe:GSM:SIGN<i>:SCENario:BATCh:FLEXible
ROUTe:GSM:SIGN<i>:SCENario:BATCh:FLEXible 
<BBBoard>, <RXConnector>, <RXConverter>, <TXConnector>, <TXConverter>, <TX2Connector>, <TX2Converter>
Activates the scenario "BCCH and TCH/PDCH" and selects the signal paths.
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
RF connector for the first output path, used for TCH/PDCH
<TXConverter>
TX module for the first output path. Select different modules for the two paths.
<TX2Connector>
RF connector for the second output path, used for BCCH
<TX2Converter>
TX module for the second output path. Select different modules for the two paths.
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.10
Manual operation: 
See 
"Scenario"
Top