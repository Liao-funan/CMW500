# FETChNIOTMEASiMEValuationIEMissionMARGinCURRentSCINdex

Module: NBIoT Measurements
Source: 7c54a107d60a4cb2.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Inband Emission Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:CURRent:SCINdex?
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:CURRent:SCINdex? 
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:EXTReme:SCINdex? 
Return subcarrier indices for inband emission margins. At these SC indices, the 
CURRent
 and 
EXTReme
 margins have been detected (see 
FETCh:
​
NIOT:
​
MEAS<i>:
​
MEValuation:
​
IEMission:
​
MARGin:
​
CURRent?
 and 
...:EXTReme
).
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified inband emission limits.
Range: 
0 %  to  100 %
Default unit: 
%
<SCindex>
Subcarrier index
Range: 
0  to  47
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top