# ROUTeLTESIGNiSCENarioCATRfoutFLEXible

Module: LTE Signaling
Source: 0807fa5a1fd642f1.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CATRfout:FLEXible
ROUTe:LTE:SIGN<i>:SCENario:CATRfout:FLEXible 
<PCCBBBoard>, <RXConnector>, <RXConverter>, <PCCTXConnector>, <PCCTXConverter>, <SCCBBBoard>, <SCCTXConnector>, <SCCTXConverter>[, <SCCRXConnector>, <SCCRXConverter>]
Activates the scenario "2CC - 1x1 1x1" and selects the signal paths.
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
<SCCBBBoard>
Signaling unit for the SCC
<SCCTXConnector>
RF connector for the SCC output path
<SCCTXConverter>
TX module for the SCC output path
<SCCRXConnector>
RF connector for the SCC input path, for UL CA only
<SCCRXConverter>
RX module for the SCC input path, for UL CA only
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS502 for FDD / R&S CMW-KS552 for TDD
Top