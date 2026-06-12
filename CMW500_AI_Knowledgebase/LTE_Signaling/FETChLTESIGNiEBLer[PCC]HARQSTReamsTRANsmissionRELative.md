# FETChLTESIGNiEBLer[PCC]HARQSTReamsTRANsmissionRELative

Module: LTE Signaling
Source: 4a2e140e15ec4e68.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:TRANsmission:RELative?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:HARQ:STReam<s>:TRANsmission:RELative? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:HARQ:STReam<s>:TRANsmission:RELative? 
Returns relative HARQ results for one downlink stream. All columns of the "HARQ per Transmissions" result table are returned:
<Reliability>, {<Sent>, <ACK>, <NACK>, <DTX>}
column 1
, {...}
col. 2
, {...}
col. 3
, {...}
col. 4
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
Sent subframes (percentage of sum of sent subframes over all transmissions)
Range: 
0 %  to  100 %
Default unit: 
%
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