# FETChWCDMaSIGNiHACKTRACeTHRoughputTOTalAVERage

Module: WCDMA Signaling
Source: 0359f6ddd60544a1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:THRoughput:TOTal:AVERage?
FETCh:WCDMa:SIGN<i>:HACK:TRACe:THRoughput:TOTal:AVERage? 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:THRoughput:TOTal:CURRent? 
READ:WCDMa:SIGN<i>:HACK:TRACe:THRoughput:TOTal:AVERage? 
READ:WCDMa:SIGN<i>:HACK:TRACe:THRoughput:TOTal:CURRent? 
Returns the current overall throughput trace results (sum of all carriers in a multi-carrier scenario).
The number of results depends on the configured number of subframes to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
HACK:
​
MSFRames
. For each 100 subframes, one result is returned.
The results of the average and current traces can be retrieved.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Throughput>
Current
: n throughput values, from first to last (most recent) measured subframe, one value per 100 measured subframes
Average
: average of all "Current" values referenced to the last statistics cycle
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
V3.2.10: command for average throughput added
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top