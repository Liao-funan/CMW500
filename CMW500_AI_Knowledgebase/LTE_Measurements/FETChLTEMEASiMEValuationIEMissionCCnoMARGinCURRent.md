# FETChLTEMEASiMEValuationIEMissionCCnoMARGinCURRent

Module: LTE Measurements
Source: 59e82144156446d9.htm

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
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:IEMission:CC<no>:MARGin:SDEViation? 
Return the limit line margin results for the CC<no> diagram. The 
CURRent
 margin indicates the minimum (vertical) distance between the inband emissions limit line and the current trace. A negative result indicates that the limit is exceeded.
The 
AVERage
, 
EXTReme
 and 
SDEViation
 values are calculated from the current margins. The margin results cannot be displayed at the GUI.
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
Default unit: 
%
<Margin>
Range: 
-50 dB  to  110 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Top