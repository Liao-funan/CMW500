# CONFigureLTESIGNiSCCAMODe

Module: LTE Signaling
Source: 9eb1e49594804fe9.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
General Settings
 > 
CONFigure:LTE:SIGN<i>:SCC:AMODe
CONFigure:LTE:SIGN<i>:SCC:AMODe 
<Mode>
Selects the SCC activation mode. For manual triggering of a state transition, see 
CALL:
​
LTE:
​
SIGN<i>:
​
SCC<c>:
​
ACTion
.
Parameters:
<Mode>
AUTO |
 
 MANual |
 
 SEMiauto
AUTO
All SCCs are activated automatically at RRC connection establishment, so that the state "MAC Activated" is reached.
MANual
Each state transition step must be initiated separately for each SCC. So several actions are required to reach the state "MAC Activated".
SEMiauto
The activation must be initiated manually for each SCC. As a result, all state transitions required to reach the state "MAC Activated" are performed.
*RST:
AUTO
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KS512 for MANual and SEMiauto
Manual operation: 
See 
"SCC Activation Mode"
Top