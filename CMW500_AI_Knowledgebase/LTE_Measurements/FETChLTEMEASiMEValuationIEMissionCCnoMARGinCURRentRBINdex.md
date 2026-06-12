# FETChLTEMEASiMEValuationIEMissionCCnoMARGinCURRentRBINdex

Module: LTE Measurements
Source: 7520bc2479a1467c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Inband Emission Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:CURRent:RBINdex?
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:CURRent:RBINdex? 
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:EXTReme:RBINdex? 
Return resource block indices for CC<no> inband emission margins. At these RB indices, the 
CURRent
 and 
EXTReme
 margins have been detected (see 
FETCh:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
IEMission:
​
CC<no>:
​
MARGin:
​
CURRent?
 and 
...:EXTReme
).
Suffix: 
<no>
1..4
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified inband emission limits.
Range: 
0 %  to  100 %
<RBindex>
Resource block index
Range: 
0  to  99
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Top