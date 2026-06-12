# FETChNIOTSIGNiPSWitchedSTATe

Module: NBIoT Signaling
Source: 526f75bb36214085.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:NIOT:SIGN<i>:PSWitched:STATe?
FETCh:NIOT:SIGN<i>:PSWitched:STATe? 
Queries the PS state, see also 
"Connection States"
.
Return values: 
<PS State>
OFF |
 
 ON |
 
 ATTached |
 
 CESTablished |
 
 DISConnect |
 
 CONNecting |
 
 SIGNaling
OFF
: signal off
ON
: signal on
ATTached
: UE attached
CESTablished
: connection established
DISConnect
: disconnect in progress
CONNecting
: connection setup in progress
SIGNaling
: signaling in progress
*RST:
OFF
Example: 
See 
"Setting Up  a Connection"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Packet Switched"
Top