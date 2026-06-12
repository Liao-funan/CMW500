# FETChINTermediateLTESIGNiEBLerALLRELative

Module: LTE Signaling
Source: 529e249fc2fb4cad.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:ALL:RELative?
FETCh:INTermediate:LTE:SIGN<i>:EBLer:ALL:RELative? 
FETCh:LTE:SIGN<i>:EBLer:ALL:RELative? 
Returns the relative overall results of the BLER measurement for the sum of all downlink streams of all carriers.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
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
V3.2.50
Top