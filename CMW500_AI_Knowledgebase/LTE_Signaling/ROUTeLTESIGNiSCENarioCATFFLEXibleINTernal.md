# ROUTeLTESIGNiSCENarioCATFFLEXibleINTernal

Module: LTE Signaling
Source: ba1652c75d5d4419.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CATF:FLEXible:INTernal
ROUTe:LTE:SIGN<i>:SCENario:CATF:FLEXible:INTernal 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTXConnector>, <PCCTXConverter>, <SCC1BBBoard>, <SCCTXConnector>, <SCCTXConverter>[, <PCCFadingBoard>, <SCC1FadingBoard>]
Activates the scenario "2CC - Fading - 1x1 1x1" with internal fading and selects the signal paths.
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
<PCCTXConnector>
RF connector for the PCC output path
<PCCTXConverter>
TX module for the PCC output path
<SCC1BBBoard>
Signaling unit for the SCC
<SCCTXConnector>
RF connector for the SCC output path
<SCCTXConverter>
TX module for the SCC output path
<PCCFadingBoard>
Internal fader for the PCC
<SCC1FadingBoard>
Internal fader for the SCC
Firmware/Software: 
V3.5.40, V3.7.10 added fader selection
Options: 
R&S CMW-KS512, R&S CMW-KE500
Top