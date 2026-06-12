# ROUTeLTESIGNiSCENarioCATFFLEXible[EXTernal]

Module: LTE Signaling
Source: 3bbf9c613fb14e55.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CATF:FLEXible[:EXTernal]
ROUTe:LTE:SIGN<i>:SCENario:CATF:FLEXible[:EXTernal] 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTXConnector>, <PCCTXConverter>, <PCCIQConnector>, <SCC1BBBoard>, <SCC1TXConnector>, <SCC1TXConverter>, <SCC1IQConnector>
Activates the scenario "2CC - Fading - 1x1 1x1" with external fading and selects the signal paths.
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
<PCCIQConnector>
DIG IQ OUT connector for fading of the PCC output path
<SCC1BBBoard>
Signaling unit for the SCC
<SCC1TXConnector>
RF connector for the SCC output path
<SCC1TXConverter>
TX module for the SCC output path
<SCC1IQConnector>
DIG IQ OUT connector for fading of the SCC output path
Example: 
See 
"Selecting a Scenario"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS512
Top