# FETChLTESIGNiTHRoughputTRACeDLPDUCURRent

Module: LTE Signaling
Source: 0d765b109fae4555.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:THRoughput:TRACe:DL:PDU:CURRent?
FETCh:LTE:SIGN<i>:THRoughput:TRACe:DL:PDU:CURRent? 
FETCh:LTE:SIGN<i>:THRoughput:TRACe:DL:PDU:AVERage? 
READ:LTE:SIGN<i>:THRoughput:TRACe:DL:PDU:CURRent? 
READ:LTE:SIGN<i>:THRoughput:TRACe:DL:PDU:AVERage? 
Returns the values of the downlink throughput traces. The results of the current and average traces can be retrieved.
The number of trace values n depends on the configured update interval and window size: 
n = integer (<window size> / <update interval>) + 1
Return values: 
<Reliability>
See 
"Reliability Indicator"
<DownlinkPDU>
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