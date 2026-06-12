# FETChNIOTSIGNiBLERRELative

Module: NBIoT Signaling
Source: a82c6062a93e4a50.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:NIOT:SIGN<i>:BLER:RELative?
FETCh:NIOT:SIGN<i>:BLER:RELative? 
Returns the relative results of the BLER measurement.
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
<ThroughputRel>
Average throughput (as percentage of maximum reachable throughput)
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
"Configuring a BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Top