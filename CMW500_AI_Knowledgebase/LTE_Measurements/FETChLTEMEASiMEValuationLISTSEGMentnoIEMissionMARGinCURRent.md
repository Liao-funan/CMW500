# FETChLTEMEASiMEValuationLISTSEGMentnoIEMissionMARGinCURRent

Module: LTE Measurements
Source: 5ff931e9a5374016.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:SDEViation? 
Return the PCC inband emission limit line margin results for segment <no> in list mode.
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
Percentage of measured subframes with failed limit check
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
V2.0.10
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top