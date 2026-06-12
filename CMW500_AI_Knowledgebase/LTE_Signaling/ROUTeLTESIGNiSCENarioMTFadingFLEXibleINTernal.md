# ROUTeLTESIGNiSCENarioMTFadingFLEXibleINTernal

Module: LTE Signaling
Source: 1a09d4cca3b64b5e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:MTFading:FLEXible:INTernal
ROUTe:LTE:SIGN<i>:SCENario:MTFading:FLEXible:INTernal 
<PCCBBBoard>, <PCCBBBoard2>, <RXConnector>, <RXConverter>, <TX1Connector>, <TX1Converter>, <TX2Connector>, <TX2Converter>[, <PCCFadingBoard1>, <PCCFadingBoard2>]
Activates the scenario "1CC - Fading - 4x2" with internal fading and selects the signal paths.
For possible parameter values, see 
"Values for Signal Path Selection"
.
Parameters:
<PCCBBBoard>
First signaling unit
<PCCBBBoard2>
Second signaling unit
<RXConnector>
RF connector for the input path
<RXConverter>
RX module for the input path
<TX1Connector>
RF connector for the first output path
<TX1Converter>
TX module for the first output path
<TX2Connector>
RF connector for the second output path
<TX2Converter>
TX module for the second output path
<PCCFadingBoard1>
First internal fader for the PCC
<PCCFadingBoard2>
Second internal fader for the PCC
Example: 
See 
"Selecting a Scenario"
Firmware/Software: 
V3.5.40, V3.7.10 added second fader selection
Options: 
R&S CMW-KS510, -KS521, -KE501
Top