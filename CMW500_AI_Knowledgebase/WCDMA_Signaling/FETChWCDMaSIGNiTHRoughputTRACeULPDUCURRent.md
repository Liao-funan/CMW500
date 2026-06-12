# FETChWCDMaSIGNiTHRoughputTRACeULPDUCURRent

Module: WCDMA Signaling
Source: 73708a1994704144.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent?
FETCh:WCDMa:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent? 
FETCh:WCDMa:SIGN<i>:THRoughput:TRACe:UL:PDU:AVERage? 
FETCh:WCDMa:SIGN<i>:THRoughput:TRACe:UL:SDU:CURRent? 
FETCh:WCDMa:SIGN<i>:THRoughput:TRACe:UL:SDU:AVERage? 
READ:WCDMa:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent? 
READ:WCDMa:SIGN<i>:THRoughput:TRACe:UL:PDU:AVERage? 
READ:WCDMa:SIGN<i>:THRoughput:TRACe:UL:SDU:CURRent? 
READ:WCDMa:SIGN<i>:THRoughput:TRACe:UL:SDU:AVERage? 
Return the values of the uplink PDU and SDU throughput traces. The results of the current and average traces can be retrieved.
The number of trace values N depends on the configured <update interval> and <window size>:
N = integer (<window size> / <update interval>)
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Throughput>
Comma-separated list of N throughput trace values
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing an RLC Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top