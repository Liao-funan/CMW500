# FETChINTermediateLTESIGNiEBLer[PCC]STReamsRELative

Module: LTE Signaling
Source: ab3188df44fd4fd6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:RELative?
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:RELative? 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:SCC<c>:STReam<s>:RELative? 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:RELative? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:STReam<s>:RELative? 
Returns the relative results of the BLER measurement for one downlink stream of one carrier.
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ACK>
Received acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<NACK>
Received negative acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<BLER>
Block error ratio (percentage of sent scheduled subframes for which no ACK has been received)
Range: 
0 %  to  100 %
Default unit: 
%
<Throughput>
Average DL throughput (percentage of maximum reachable throughput)
Range: 
0 %  to  100 %
Default unit: 
%
<DTX>
Percentage of sent scheduled subframes for which no ACK and no NACK has been received
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing a Continuous BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.30, SCC command V3.2.50
Options: 
R&S CMW-KS520
Top