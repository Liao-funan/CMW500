# FETChGSMSIGNiCSWitchedSTATe

Module: GSM Signaling
Source: a2b1efdd7b6e48c0.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:GSM:SIGN<i>:CSWitched:STATe?
FETCh:GSM:SIGN<i>:CSWitched:STATe? 
Returns the CS connection state. Use 
CALL:
​
GSM:
​
SIGN<i>:
​
CSWitched:
​
ACTion
 to initiate a transition between different connection states.
The CS state changes to 
ON
 when the signaling generator is started (see 
SOURce:
​
GSM:
​
SIGN<i>:
​
CELL:
​
STATe
).
To make sure that a GSM cell signal is available, query the cell state. It must be 
ON, ADJ
 (see 
SOURce:
​
GSM:
​
SIGN<i>:
​
CELL:
​
STATe:
​
ALL?
).
Return values: 
<CS State>
OFF |
 
 ON |
 
 SYNC |
 
 ALER |
 
 CEST |
 
 LUPD |
 
 CONN |
 
 REL |
 
 IMS |
 
 SMESsage |
 
 RMESsage |
 
 IHANdover |
 
 OHANdover
For a description of the states, refer to 
"Connection States"
.
The values indicate the following states:
SYNC = synchronized
ALER = alerting
CEST = call established
LUPD = location update
CONN = connecting
REL = releasing
IMS = IMSI detach
SMESsage = sending message
RMESsage = receiving message
IHANdover = incoming handover in progress
OHANdover = outgoing handover in progress
Example: 
See 
"Switching On the Cell Signal and the MS"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V1.0.15.23: added RRH
V2.0.10: added SMESsage, RMESsage
V3.0.10: removed RRH, added IHANdover, OHANdover
Manual operation: 
See 
"Connect / Disconnect / Send SMS / Release PDP Context (hotkeys)"
Top