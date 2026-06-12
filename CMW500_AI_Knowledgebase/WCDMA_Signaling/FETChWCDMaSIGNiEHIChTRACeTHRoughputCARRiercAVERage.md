# FETChWCDMaSIGNiEHIChTRACeTHRoughputCARRiercAVERage

Module: WCDMA Signaling
Source: a15305b40ac94328.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-HICH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:EHICh:TRACe:THRoughput:CARRier<c>:AVERage?
FETCh:WCDMa:SIGN<i>:EHICh:TRACe:THRoughput:CARRier<c>:AVERage? 
FETCh:WCDMa:SIGN<i>:EHICh:TRACe:THRoughput:CARRier<c>:CURRent? 
READ:WCDMa:SIGN<i>:EHICh:TRACe:THRoughput:CARRier<c>:AVERage? 
READ:WCDMa:SIGN<i>:EHICh:TRACe:THRoughput:CARRier<c>:CURRent? 
Return the results of the E-HICH traces per carrier.
The number of results depends on the configured number of subframes to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
EHICh:
​
MFRames
. One measurement result is returned per 100 subframes for 2 ms TTI and per 20 frames for 10 ms TTI.
The results of the average and current traces can be retrieved.
Suffix: 
<c>
1..*
Uplink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Troughput>
Current
: n throughput values, from first to last (most recent) measured subframe
Average
: average of all "Current" values referenced to the last statistics cycle
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing an E-HICH Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top