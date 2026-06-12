# FETChINTermediateLTESIGNiEBLer[PCC]RELative

Module: LTE Signaling
Source: 45c46e40b8f54848.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:RELative?
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:RELative? 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:SCC<c>:RELative? 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:RELative? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:RELative? 
Returns the relative overall results of the BLER measurement for the sum of all DL streams of one carrier.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..3
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_ACK>
Received acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<3_NACK>
Received negative acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<4_BLER>
Block error ratio (percentage of sent scheduled subframes for which no ACK has been received)
Range: 
0 %  to  100 %
Default unit: 
%
<5_ThroughputAver>
Average DL throughput (as percentage of maximum reachable throughput)
Range: 
0 %  to  100 %
Default unit: 
%
<6_DTX>
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
Top