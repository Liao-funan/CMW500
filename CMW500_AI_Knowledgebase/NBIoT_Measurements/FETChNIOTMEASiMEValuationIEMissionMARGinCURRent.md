# FETChNIOTMEASiMEValuationIEMissionMARGinCURRent

Module: NBIoT Measurements
Source: 0baed35180da46aa.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:EXTReme? 
FETCh:NIOT:MEAS<i>:MEValuation:IEMission:MARGin:SDEViation? 
Return the limit line margin results for the inband emissions. The 
CURRent
 margin indicates the minimum (vertical) distance between the inband emissions limit line and the current trace. A negative result indicates that the limit is exceeded.
The 
AVERage
, 
EXTReme
 and 
SDEViation
 values are calculated from the current margins. The margin results cannot be displayed at the GUI.
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
V3.5.10
Top