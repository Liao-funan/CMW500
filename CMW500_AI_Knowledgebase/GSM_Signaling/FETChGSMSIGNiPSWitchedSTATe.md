# FETChGSMSIGNiPSWitchedSTATe

Module: GSM Signaling
Source: 9a45fb39ca7f4bfd.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:GSM:SIGN<i>:PSWitched:STATe?
FETCh:GSM:SIGN<i>:PSWitched:STATe? 
Returns the PS connection state. Use 
CALL:
​
GSM:
​
SIGN<i>:
​
PSWitched:
​
ACTion
 to initiate a transition between different connection states.
The PS state changes to 
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
<PS State>
OFF |
 
 ON |
 
 ATT |
 
 TBF |
 
 PDP |
 
 AIPR |
 
 RAUP |
 
 PAIP |
 
 CTIP |
 
 REL |
 
 PDIP |
 
 DIPR
For a description of the states, refer to 
"Connection States"
.
The values indicate the following states:
ATT = attached
TBF = TBF established
PDP = PDP context activated
AIPR = attaching (attach in progress)
RAUP = routing area update
PAIP = PDP context activation (PDP context activation in progress)
CTIP = connecting (connecting TBF in progress)
REL = releasing
PDIP = PDP context deactivation (PDP context deactivation in progress)
DIPR = detaching (detach in progress)
Example: 
See 
"Setting Up a PS Connection"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"Connect / Disconnect / Send SMS / Release PDP Context (hotkeys)"
Top