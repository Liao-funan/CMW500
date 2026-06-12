# FETChLTEMEASiMEValuationLISTSEGMentnoPMONitorARRaySTARt

Module: LTE Measurements
Source: 8a04310d8c7f495e.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:ARRay:STARt?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:ARRay:STARt? 
Returns the offset of the first power monitor result for segment <no> within a result list for all measured segments. Such a result list is, for example, returned by the command 
FETCh:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
PMONitor:
​
RMS?
.
A returned <Start> value n indicates that the result for the first subframe of the segment is the (n+1)
th
 result in the power result list over all segments.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<Start>
Range: 
0  to  3999
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.0.20
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
V3.2.70: increased maximum start value to 3999
Options: 
R&S CMW-KM012
Top