# CONFigureWCDMaSIGNiCONNectionPACKetINACtivityCPCHTIMer

Module: WCDMA Signaling
Source: b31c152ce4c248d4.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Packet Data Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:CPCH:TIMer
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:CPCH:TIMer 
<InactivityTime>
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:FACH:TIMer 
<InactivityTime>
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:UPCH:TIMer 
<InactivityTime>
Sets the timeout value for network-initiated automatic RRC state transition
The origination RRC state is indicated in the remote command name as follows:
...:CPCH:... for origination state CELL_PCH
...:FACH:... for origination state CELL_FACH
...:UPCH:... for origination state URA_PCH
Parameters:
<InactivityTime>
Range: 
1 s  to  120 s
*RST:
5 s
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.5.40
V3.5.50: range reduced
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Inactivity Timer"
Top