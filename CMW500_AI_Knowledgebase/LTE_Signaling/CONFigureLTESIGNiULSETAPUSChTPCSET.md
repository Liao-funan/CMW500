# CONFigureLTESIGNiULSETAPUSChTPCSET

Module: LTE Signaling
Source: ab83696ff3624d48.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:SET
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:SET 
<SetType>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:SET 
<SetType>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:SET 
<SetType>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:SET 
<SetType>
Selects the active TPC setup to be executed for power control of the PUSCH.
For some TPC setups, the execution must be explicitly triggered via 
CONFigure:
​
LTE:
​
SIGN<i>:
​
UL[:
​
PCC]:
​
PUSCh:
​
TPC:
​
PEXecute
.
Suffix: 
<c>
1..4
Parameters:
<SetType>
MINPower |
 
 MAXPower |
 
 CONStant |
 
 SINGle |
 
 UDSingle |
 
 UDContinuous |
 
 ALT0 |
 
 CLOop |
 
 RPControl |
 
 FULPower
MINPower
: command the UE to minimum power
MAXPower
: command the UE to maximum power
CONStant
: command the UE to keep the power constant
SINGle
: send a pattern once (only one type of TPC command)
UDSingle
: send a pattern once (mixed TPC commands allowed)
UDContinuous
: send a pattern continuously
ALT0
: send an alternating pattern continuously
CLOop
: command the UE to a configurable target power
RPControl
: patterns for 3GPP relative power control test
FULPower
: flexible uplink power
*RST:
CLO
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
PCC V3.2.50, SCC and FULPower V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Active TPC Setup"
Top