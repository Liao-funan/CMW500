# FETChLTESIGNiEBLerTRACeTHRoughput[PCC]MCQISTReams

Module: LTE Signaling
Source: 37ae002ef36f4116.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput[:PCC]:MCQI:STReam<s>?
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput[:PCC]:MCQI:STReam<s>? 
FETCh:LTE:SIGN<i>:EBLer:TRACe:THRoughput:SCC<c>:MCQI:STReam<s>? 
Returns the median CQI trace for one downlink stream.
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
<s>
1..2
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
Median CQI value calculated from the CQI indices reported within 200 processed subframes (the labeled subframe and the previous 199 subframes)
Range: 
0  to  15
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.10, SCC command V3.2.70
Top