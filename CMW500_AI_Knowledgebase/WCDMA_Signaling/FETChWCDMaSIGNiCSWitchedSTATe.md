# FETChWCDMaSIGNiCSWitchedSTATe

Module: WCDMA Signaling
Source: e123eb21cdd24eaa.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:WCDMa:SIGN<i>:CSWitched:STATe?
FETCh:WCDMa:SIGN<i>:CSWitched:STATe? 
Queries the CS connection state, see also 
"CS Connection States"
.
Use 
CALL:
​
WCDMa:
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
WCDMa:
​
SIGN<i>:
​
CELL:
​
STATe
). To make sure that a WCDMA cell signal is available, query the cell state. It must be 
ON, ADJ
 (see 
SOURce:
​
WCDMa:
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
ON |
 
 REGister |
 
 ALERting |
 
 CONNecting |
 
 PAGing |
 
 RELeasing |
 
 SIGNaling |
 
 IHPReparate |
 
 IHANdover |
 
 OHANdover |
 
 OFF |
 
 CESTablished |
 
 IRPReparate |
 
 IREDirection |
 
 OREDirection
ON
: signal is on
REGister
: registered
ALERting
: alerting
CONNecting
: call setup in progress
PAGing
: paging in progress
RELeasing
: disconnect in progress
SIGNaling
: signaling in progress
IHPReparate
: preparation for incoming handover
IHANdover
: incoming handover in progress
OHANdover
: outgoing handover in progress
OFF
: signal is off
CESTablished
: call established
IRPReparate
: preparation for incoming redirection
IREDirection
: incoming redirection in progress
OREDirection
: outgoing redirection in progress
*RST:
OFF
Example: 
See 
"Switching On the Cell Signal and the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V1.0.15.23: added OHANdover
V3.0.10: added IHANdover
V3.2.80: added IHPReparate, IRPReparate, IREDirection, OREDirection
Manual operation: 
See 
"Circuit Switched, Packet Switched, Reduced Signaling"
Top