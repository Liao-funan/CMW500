# FETChGSMSIGNiTHRoughputTRACeDLPDUAVERage

Module: GSM Signaling
Source: d53c40f4b645463b.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:THRoughput:TRACe:DL:PDU:AVERage?
FETCh:GSM:SIGN<i>:THRoughput:TRACe:DL:PDU:AVERage? 
FETCh:GSM:SIGN<i>:THRoughput:TRACe:DL:PDU:CURRent? 
FETCh:GSM:SIGN<i>:THRoughput:TRACe:DL:SDU:AVERage? 
FETCh:GSM:SIGN<i>:THRoughput:TRACe:DL:SDU:CURRent? 
READ:GSM:SIGN<i>:THRoughput:TRACe:DL:PDU:AVERage? 
READ:GSM:SIGN<i>:THRoughput:TRACe:DL:PDU:CURRent? 
READ:GSM:SIGN<i>:THRoughput:TRACe:DL:SDU:AVERage? 
READ:GSM:SIGN<i>:THRoughput:TRACe:DL:SDU:CURRent? 
Return the values of the downlink PDU and SDU throughput traces. The results of the average and current traces can be retrieved.
The number of trace values n depends on the configured <result interval> and <window size>:
n = integer (<window size> / <result interval>)
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Throughput>
Comma-separated list of n throughput trace values
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
V3.2.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top