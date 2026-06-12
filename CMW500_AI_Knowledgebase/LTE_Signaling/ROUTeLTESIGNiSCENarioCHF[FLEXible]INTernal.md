# ROUTeLTESIGNiSCENarioCHF[FLEXible]INTernal

Module: LTE Signaling
Source: 625ff5555a6348c2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CHF[:FLEXible]:INTernal
ROUTe:LTE:SIGN<i>:SCENario:CHF[:FLEXible]:INTernal 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTX1Connector>, <PCCTX1Converter>, <PCCTX2Connector>, <PCCTX2Converter>, <PCCTX3Connector>, <PCCTX3Converter>, <PCCTX4Connector>, <PCCTX4Converter>, <SCC1BBBoard>, <SCC1TX1Conn>, <SCC1TX1Conv>, <SCC1TX2Conn>, <SCC1TX2Conv>, <SCC2BBBoard>, <SCC2TX1Conn>, <SCC2TX1Conv>, <SCC2TX2Conn>, <SCC2TX2Conv>, <PCCFadingBoard>, <SCC1FadingBoard>, <SCC2FadingBoard>[, <Coprocessor>]
Activates the scenario "3CC - Fading - nx4 nx2 nx2" with internal fading and selects the signal paths.
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
<PCCTX2Connector>
RF connector for the second PCC output path
<PCCTX2Converter>
TX module for the second PCC output path
<PCCTX3Connector>
RF connector for the third PCC output path
<PCCTX3Converter>
TX module for the third PCC output path
<PCCTX4Connector>
RF connector for the fourth PCC output path
<PCCTX4Converter>
TX module for the fourth PCC output path
<SCC1BBBoard>
Signaling unit for the SCC1
<SCC1TX1Conn>
RF connector for the first SCC1 output path
<SCC1TX1Conv>
TX module for the first SCC1 output path
<SCC1TX2Conn>
RF connector for the second SCC1 output path
<SCC1TX2Conv>
TX module for the second SCC1 output path
<SCC2BBBoard>
Signaling unit for the SCC2
<SCC2TX1Conn>
RF connector for the first SCC2 output path
<SCC2TX1Conv>
TX module for the first SCC2 output path
<SCC2TX2Conn>
RF connector for the second SCC2 output path
<SCC2TX2Conv>
TX module for the second SCC2 output path
<PCCFadingBoard>
Internal fader for the PCC
<SCC1FadingBoard>
Internal fader for the SCC1
<SCC2FadingBoard>
Internal fader for the SCC2
<Coprocessor>
SUA for coprocessing
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KS512, -KS520, -KS540, -KE500, -KE504
Top