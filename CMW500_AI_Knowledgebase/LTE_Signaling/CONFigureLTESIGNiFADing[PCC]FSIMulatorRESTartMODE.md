# CONFigureLTESIGNiFADing[PCC]FSIMulatorRESTartMODE

Module: LTE Signaling
Source: c2df0602fa7647f3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:RESTart:MODE
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:RESTart:MODE 
<RestartMode>
CONFigure:LTE:SIGN<i>:FADing:SCC<c>:FSIMulator:RESTart:MODE 
<RestartMode>
Sets the restart mode of the fading simulator.
The scenario "1CC - Fading - 4x2" supports only the mode 
TRIGger
. The other scenarios support only the modes 
AUTO
 and 
MANual
.
Suffix: 
<c>
1..7
Parameters:
<RestartMode>
AUTO |
 
 MANual |
 
 TRIGger
AUTO
: fading automatically starts with the DL signal
MANual
: fading is started and restarted manually (see 
CONFigure:...:FSIMulator:RESTart
)
TRIGger
: fading starts automatically and synchronously on both I/Q boards
*RST:
AUTO
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.20
V3.2.70: SCC command
V3.2.80: TRIGger
Options: 
See relevant fading scenario
Manual operation: 
See 
"Restart Event"
Top