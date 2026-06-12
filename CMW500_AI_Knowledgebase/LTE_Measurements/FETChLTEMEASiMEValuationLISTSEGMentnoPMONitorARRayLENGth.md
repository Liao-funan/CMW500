# FETChLTEMEASiMEValuationLISTSEGMentnoPMONitorARRayLENGth

Module: LTE Measurements
Source: 310241bb8def4a10.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:ARRay:LENGth?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:ARRay:LENGth? 
Returns the number of power monitor results for segment <no> contained in a result list for all measured segments. Such a result list is, for example, returned by the command 
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
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<Length>
Range: 
0  to  2000
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
Options: 
R&S CMW-KM012
Top