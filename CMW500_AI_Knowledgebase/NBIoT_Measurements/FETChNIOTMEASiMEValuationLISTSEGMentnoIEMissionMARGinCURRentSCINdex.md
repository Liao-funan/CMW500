# FETChNIOTMEASiMEValuationLISTSEGMentnoIEMissionMARGinCURRentSCINdex

Module: NBIoT Measurements
Source: b38d901c65f34e65.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent:SCINdex?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent:SCINdex? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme:SCINdex? 
Return subcarrier indices for inband emission margins for segment <no> in list mode. At these SC indices, the 
CURRent
 and 
EXTReme
 margins have been detected.
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
V3.7.20
Options: 
R&S CMW-KM012
Top