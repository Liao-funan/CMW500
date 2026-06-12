# FETChLTESIGNiTHRoughputTRACeULPDUCURRent

Module: LTE Signaling
Source: 3efb85d0f7174d3e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent?
FETCh:LTE:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent? 
FETCh:LTE:SIGN<i>:THRoughput:TRACe:UL:PDU:AVERage? 
READ:LTE:SIGN<i>:THRoughput:TRACe:UL:PDU:CURRent? 
READ:LTE:SIGN<i>:THRoughput:TRACe:UL:PDU:AVERage? 
Returns the values of the uplink throughput traces. The results of the current and average traces can be retrieved.
The number of trace values n depends on the configured update interval and window size: 
n = integer (<window size> / <update interval>) + 1
Return values: 
<Reliability>
See 
"Reliability Indicator"
<UplinkPDU>
Comma-separated list of n throughput values
Default unit: 
bit/s
Example: 
See 
"Performing an RLC Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Top