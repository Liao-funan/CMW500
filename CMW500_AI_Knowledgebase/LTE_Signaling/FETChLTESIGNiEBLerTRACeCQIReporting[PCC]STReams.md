# FETChLTESIGNiEBLerTRACeCQIReporting[PCC]STReams

Module: LTE Signaling
Source: 1736abf84d5d4058.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer:TRACe:CQIReporting[:PCC]:STReam<s>?
FETCh:LTE:SIGN<i>:EBLer:TRACe:CQIReporting[:PCC]:STReam<s>? 
FETCh:LTE:SIGN<i>:EBLer:TRACe:CQIReporting:SCC<c>:STReam<s>? 
Returns the Y-values of the CQI index bar graph for one downlink stream.
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<YValue>
Comma-separated list of 16 Y-values, for CQI index 0 to 15
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.10, SCC command V3.2.70
Top