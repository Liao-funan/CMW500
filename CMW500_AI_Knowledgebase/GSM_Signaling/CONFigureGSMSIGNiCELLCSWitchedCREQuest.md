# CONFigureGSMSIGNiCELLCSWitchedCREQuest

Module: GSM Signaling
Source: 5ea1715701fb4acb.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Cell
 > 
CONFigure:GSM:SIGN<i>:CELL:CSWitched:CREQuest
CONFigure:GSM:SIGN<i>:CELL:CSWitched:CREQuest 
<ConnectRequest>[, <AcceptAfter>]
CONFigure:GSM:SIGN<i>:CELL:PSWitched:CREQuest 
<ConnectRequest>[, <AcceptAfter>]
Specifies the handling of the MS originating CS/PS connection request.
Parameters:
<ConnectRequest>
ACCept |
 
 REJect |
 
 IGNore
ACCept
: accept connection
REJect
: reject connection
IGNore
: ignore first attempt, <AcceptAfter> parameter defines further handling
*RST:
ACC
<AcceptAfter>
AA1 |
 
 AA2 |
 
 AA3 |
 
 AA4 |
 
 AA5 |
 
 AA6 |
 
 AA7 |
 
 IALL
AA1 to AA7
: accept after burst 1 to 7
IALL
: ignore all
*RST:
AA1
Example: 
See 
"Configuring Cell Parameters"
Firmware/Software: 
V3.2.30
Manual operation: 
See 
"Connection Request (CS and PS)"
Top