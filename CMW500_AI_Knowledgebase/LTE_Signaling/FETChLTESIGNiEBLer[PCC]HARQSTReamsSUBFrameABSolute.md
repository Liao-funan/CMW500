# FETChLTESIGNiEBLer[PCC]HARQSTReamsSUBFrameABSolute

Module: LTE Signaling
Source: 0f5fa28530c94849.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:SUBFrame:ABSolute?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:SUBFrame:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:HARQ:STReam<s>:SUBFrame:ABSolute? 
Returns absolute HARQ results for one downlink stream. All columns of the "HARQ per Subframe" result table are returned:
<Reliability>, {<Sent>, <ACK>, <NACK>, <DTX>}
column 0
, {...}
column 1
, ..., {...}
column 9
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Sent>
NAV returned, for future use
<ACK>
Number of received acknowledgments
Range: 
0  to  2E+9
<NACK>
Number of received negative acknowledgments
Range: 
0  to  2E+9
<DTX>
Number of sent subframes for which no ACK and no NACK has been received
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10, SCC command V3.2.70
Top