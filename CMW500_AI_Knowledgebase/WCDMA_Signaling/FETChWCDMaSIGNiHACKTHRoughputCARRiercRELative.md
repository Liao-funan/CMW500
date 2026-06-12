# FETChWCDMaSIGNiHACKTHRoughputCARRiercRELative

Module: WCDMA Signaling
Source: 028c8de2bbe9499a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:RELative?
FETCh:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:RELative? 
READ:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:RELative? 
Return the throughput results as percentage of the 
"Max. possible Throughput"
. The current, maximum, minimum, scheduled and average values are returned, see 
"Throughput"
.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<RelCurrent>
Range: 
0 %  to  100 %
Default unit: 
%
<RelMaximum>
Range: 
0 %  to  100 %
Default unit: 
%
<RelMinimum>
Range: 
0 %  to  100 %
Default unit: 
%
<RelScheduled>
Range: 
0 %  to  100 %
Default unit: 
%
<RelAverage>
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
V3.2.10: additional parameter "RelAverage"
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top