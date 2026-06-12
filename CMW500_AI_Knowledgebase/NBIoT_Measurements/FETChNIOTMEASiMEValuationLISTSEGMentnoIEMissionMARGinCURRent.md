# FETChNIOTMEASiMEValuationLISTSEGMentnoIEMissionMARGinCURRent

Module: NBIoT Measurements
Source: 77441535e1374f97.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:SDEViation? 
Return the inband emission limit line margin results for segment <no> in list mode.
The 
CURRent
 margins indicate the minimum (vertical) distance between the limit line and the current trace. A negative result indicates that the limit is exceeded.
The 
AVERage
, 
EXTReme
 and 
SDEViation
 values are calculated from the current margins.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<OutOfTolerance>
Percentage of measured slots with failed limit check
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
V3.7.20
Options: 
R&S CMW-KM012
Top