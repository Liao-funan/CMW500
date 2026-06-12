# FETChLTESIGNiSCCcSTATe

Module: LTE Signaling
Source: ba1b95187a7b4d6c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
FETCh:LTE:SIGN<i>:SCC<c>:STATe?
FETCh:LTE:SIGN<i>:SCC<c>:STATe? 
Queries the state of the SCC number <c>, see also 
"SCC States"
.
Suffix: 
<c>
1..4
Return values: 
<SCC State>
OFF |
 
 ON |
 
 RRCadded |
 
 MACactivated
OFF
: SCC off
ON
: SCC on
RRCadded
: RRC added
MACactivated
: MAC activated
Example: 
See 
"Attaching the UE and Activating SCCs"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"SCC<n> State"
Top