# FETChLTESIGNiEBLerTRACeTHRoughput[PCC]

Module: LTE Signaling
Source: e20227c8945f4af6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput[:PCC]?
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput[:PCC]? 
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput:SCC<c>? 
Returns the throughput trace for the sum of all DL streams of one carrier.
Each value is returned as a pair of X-value and Y-value. The number of result pairs n equals the number of subframes to be processed per measurement cycle, divided by 200.
Returned results: <Reliability>, <XValue>
1
, <YValue>
1
, ..., <XValue>
n
, <YValue>
n
Suffix: 
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<XValue>
Subframe label, 0 = last processed subframe, -1 = previously processed subframe, and so on
Range: 
-199800  to  0
<YValue>
Throughput value calculated from the BLER result of 200 processed subframes (the labeled subframe and the previous 199 subframes)
Default unit: 
kbit/s
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V2.0.10. SCC command V3.2.50
Top