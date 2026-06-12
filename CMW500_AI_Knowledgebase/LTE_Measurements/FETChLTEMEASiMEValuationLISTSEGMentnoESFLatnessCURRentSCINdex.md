# FETChLTEMEASiMEValuationLISTSEGMentnoESFLatnessCURRentSCINdex

Module: LTE Measurements
Source: f1735dbae9d044e6.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent:SCINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent:SCINdex? 
Return subcarrier indices of the equalizer spectrum flatness measurement for segment <no> in list mode. At these SC indices, the current minimum and maximum power of the equalizer coefficients have been detected within range 1 and range 2.
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
<Maximum1>
SC index of max (range 1)
Range: 
0  to  1199
<Minimum1>
SC index of min (range 1)
Range: 
0  to  1199
<Maximum2>
SC index of max (range 2)
Range: 
0  to  1199
<Minimum2>
SC index of min (range 2)
Range: 
0  to  1199
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