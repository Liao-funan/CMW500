# CONFigureWCDMaSIGNiCONNectionPACKetINACtivityDCHNETWorkDSTate

Module: WCDMA Signaling
Source: 29f7be6bb6c14519.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Packet Data Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:DCH:NETWork:DSTate
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:DCH:NETWork:DSTate 
<DestState>
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:DCH:UEFDormancy:DSTate 
<DestState>
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:INACtivity:FACH:DSTate 
<DestState>
Specifies the destination state of the UE for automatic RRC transitions.
The origination RRC state is indicated in the remote command name as follows:
...:DCH:NETWork:... for state CELL_DCH (network-initiated RRC transition)
...:DCH:UEFDormacy:... for state CELL_DCH (UE-initiated RRC transition)
...:FACH:... for state CELL_FACH
Parameters:
<DestState>
IDLE |
 
 FACH |
 
 CPCH |
 
 UPCH
Idle, CELL_FACH, CELL_PCH, URA_PCH
*RST:
IDLE
Example: 
See 
"Configuring Connection Types"
Options: 
V3.5.40
R&S CMW-KS410
Manual operation: 
See 
"Destination State (Network)"
Top