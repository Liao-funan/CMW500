# ROUTeLTESIGNiSCENarioCCMScFLEXible

Module: LTE Signaling
Source: e75cc841bd344473.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CCMS<c>:FLEXible
ROUTe:LTE:SIGN<i>:SCENario:CCMS<c>:FLEXible 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTX1Connector>, <PCCTX1Converter>, <SCC1BBBoard>, <SCC1TX1Connect>, <SCC1TX1Convert>, <SCC1TX2Connect>, <SCC1TX2Convert>, <SCC2BBBoard>, <SCC2TXConnector>, <SCC2TXConverter>
Activates the scenario "3CC - 1x1 nx2 1x1" and selects the signal paths.
For possible parameter values, see 
"Values for Signal Path Selection"
.
Suffix: 
<c>
1
MIMO SCC number
Parameters:
<PCCBBBoard>
Signaling unit for the PCC
<RXConnector>
RF connector for the PCC input path
<RXConverter>
RX module for the PCC input path
<PCCTX1Connector>
RF connector for the PCC output path
<PCCTX1Converter>
TX module for the PCC output path
<SCC1BBBoard>
Signaling unit for the SCC1
<SCC1TX1Connect>
RF connector for the first SCC1 output path
<SCC1TX1Convert>
TX module for the first SCC1 output path
<SCC1TX2Connect>
RF connector for the second SCC1 output path
<SCC1TX2Convert>
TX module for the second SCC1 output path
<SCC2BBBoard>
Signaling unit for the SCC2
<SCC2TXConnector>
RF connector for the SCC2 output path
<SCC2TXConverter>
TX module for the SCC2 output path
Example: 
See 
"Selecting a Scenario"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS512, -KS520
Top