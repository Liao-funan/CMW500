# PREPareGSMSIGNiHANDoverMMODe

Module: GSM Signaling
Source: d1d12cea4a2448d8.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
General Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:MMODe
PREPare:GSM:SIGN<i>:HANDover:MMODe 
<Mode>
Selects the mechanism to be used for handover to another signaling application.
For CS connections are supported: Redirection, dual band intra-RAT handover, inter-RAT handover.
For PS connections are supported: dual band intra-RAT handover and cell change order.
Parameters:
<Mode>
REDirection |
 
 DUALband |
 
 HANDover |
 
 CCORder
Redirection, dual-band intra-RAT handover, inter-RAT handover, cell change order
*RST:
RED
Example: 
See 
"Performing an Inter-RAT CS Handover"
Firmware/Software: 
V3.2.70
V3.5.20: added HAND, removed MTCS
V3.7.10: added DUALband, CCORder
Manual operation: 
See 
"Mobility Mode"
Top