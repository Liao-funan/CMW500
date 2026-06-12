# FETChWCDMaSIGNiHACKTHRoughputCARRiercABSolute

Module: WCDMA Signaling
Source: c8809dc5fe364e39.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:ABSolute?
FETCh:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:ABSolute? 
READ:WCDMa:SIGN<i>:HACK:THRoughput:CARRier<c>:ABSolute? 
Return the throughput results as absolute values. The current, maximum, minimum, scheduled and average values are returned, see 
"Throughput"
.
In addition to the measured values, the theoretical maximum possible throughput is returned, see 
"Max. possible Throughput"
.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<AbsCurrent>
Current throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsMaximum>
Maximum throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsMinimum>
Minimum throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsScheduled>
Scheduled throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<MaxPossible>
Maximum possible throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsTotalCurrent>
Current throughput - sum of all carriers
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<TotalMaxPos>
Maximum possible throughput - sum of all carriers
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsTotalAverage>
Average throughput calculated from a sum of all carriers
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<AbsAverage>
Average throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
V3.2.10: additional parameters "AbsTotalAverage" and "AbsAverage"
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top