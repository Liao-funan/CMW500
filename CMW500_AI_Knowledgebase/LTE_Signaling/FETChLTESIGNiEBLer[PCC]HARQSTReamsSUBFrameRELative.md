# FETChLTESIGNiEBLer[PCC]HARQSTReamsSUBFrameRELative

Module: LTE Signaling
Source: 06d4c255a5d34cbd.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:SUBFrame:RELative?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:SUBFrame:RELative? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:HARQ:STReam<s>:SUBFrame:RELative? 
Returns relative HARQ results for one downlink stream. All columns of the "HARQ per Subframe" result table are returned:
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
Received acknowledgments (percentage of ACK+NACK+DTX in the column)
Range: 
0 %  to  100 %
Default unit: 
%
<NACK>
Received negative acknowledgments (percentage of ACK+NACK+DTX in the column)
Range: 
0 %  to  100 %
Default unit: 
%
<DTX>
Sent subframes for which no ACK and no NACK has been received (percentage of ACK+NACK+DTX in the column)
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10, SCC command V3.2.70
Top