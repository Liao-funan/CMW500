# FETChLTESIGNiPSWitchedSTATe

Module: LTE Signaling
Source: faaa7ffd8d154f56.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
FETCh:LTE:SIGN<i>:PSWitched:STATe?
FETCh:LTE:SIGN<i>:PSWitched:STATe? 
Queries the PS domain state, see also 
"Packet-Switched States"
.
Return values: 
<PS State>
OFF |
 
 ON |
 
 ATTached |
 
 CESTablished |
 
 DISConnect |
 
 CONNecting |
 
 SIGNaling |
 
 SMESsage |
 
 RMESsage |
 
 IHANdover |
 
 OHANdover
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
SMESsage
: sending message
RMESsage
: receiving message
IHANdover
: incoming handover in progress
OHANdover
: outgoing handover in progress
*RST:
OFF
Example: 
See 
"Setting Up a Test Mode Connection"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.0.10: added IHANdover, OHANdover
Manual operation: 
See 
"Packet Switched"
Top