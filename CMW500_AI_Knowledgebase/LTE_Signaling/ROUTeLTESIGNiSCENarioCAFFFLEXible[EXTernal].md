# ROUTeLTESIGNiSCENarioCAFFFLEXible[EXTernal]

Module: LTE Signaling
Source: 8260300a3a454ce0.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CAFF:FLEXible[:EXTernal]
ROUTe:LTE:SIGN<i>:SCENario:CAFF:FLEXible[:EXTernal] 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTX1Connector>, <PCCTX1Converter>, <PCCIQ1Connector>, <PCCTX2Connector>, <PCCTX2Converter>, <PCCIQ2Connector>, <SCC1BBBoard>, <SCC1TX1Conn>, <SCC1TX1Conv>, <SCC1IQ1Conn>, <SCC1TX2Conn>, <SCC1TX2Conv>, <SCC1IQ2Conn>
Activates the scenario "2CC - Fading - nx2 nx2" with external fading and selects the signal paths.
For possible parameter values, see 
"Values for Signal Path Selection"
.
Parameters:
<PCCBBBoard>
Signaling unit for the PCC
<RXConnector>
RF connector for the PCC input path
<RXConverter>
RX module for the PCC input path
<PCCTX1Connector>
RF connector for the first PCC output path
<PCCTX1Converter>
TX module for the first PCC output path
<PCCIQ1Connector>
DIG IQ OUT connector for fading of the first PCC output path
<PCCTX2Connector>
RF connector for the second PCC output path
<PCCTX2Converter>
TX module for the second PCC output path
<PCCIQ2Connector>
DIG IQ OUT connector for fading of the second PCC output path
<SCC1BBBoard>
Signaling unit for the SCC
<SCC1TX1Conn>
RF connector for the first SCC output path
<SCC1TX1Conv>
TX module for the first SCC output path
<SCC1IQ1Conn>
DIG IQ OUT connector for fading of the first SCC output path
<SCC1TX2Conn>
RF connector for the second SCC output path
<SCC1TX2Conv>
TX module for the second SCC output path
<SCC1IQ2Conn>
DIG IQ OUT connector for fading of the second SCC output path
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS512, -KS520
Top