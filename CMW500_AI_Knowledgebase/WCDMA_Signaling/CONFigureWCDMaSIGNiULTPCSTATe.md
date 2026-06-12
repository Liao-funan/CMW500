# CONFigureWCDMaSIGNiULTPCSTATe

Module: WCDMA Signaling
Source: 42a1e8bdc65341f8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
TX Power Control Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:TPC:STATe?
CONFigure:WCDMa:SIGN<i>:UL:TPC:STATe? 
Queries the current TPC state.
Return values: 
<State>
IDLE |
 
 CONTinous |
 
 ALTernating |
 
 TPLocked |
 
 TPUNlocked |
 
 MAXPower |
 
 MINPower |
 
 TRANsition |
 
 SINGle |
 
 SEARching |
 
 FAILed |
 
 MRESource |
 
 SCONflict |
 
 SCHanged
IDLE
: no connection established
CONTinuous
: transmitting continuous pattern
ALTernating
: transmitting alternating pattern
TPLocked
: closed loop target power reached
TPUNlocked
: reaching closed loop target power failed
MAXPower
: maximum power reached
MINPower
: minimum power reached
TRANsition
: transition to a state, e.g. to maximum power
SINGle
: transmitting a single user-defined pattern
Only relevant for "Max. Power E-DCH" setup:
SEARching
: setup started, max power not yet reached
FAILed
: test procedure failed in state "Searching"
MRESource
: required resources are blocked/not available
SCONflict
: settings are inappropriate for the setup
SCHanged
: relevant settings changed after setup execution
*RST:
IDLE
Example: 
See 
"Configuring and Executing a TPC Setup"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.0.30: added SEARching, FAILed, MRESource, SCONflict, SCHanged
Manual operation: 
See 
"TPC Condition"
Top