# FETChGSMMEASiMEValuationLISTSRELiability

Module: GSM Measurements
Source: 6eb971e13755469e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SRELiability?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SRELiability? 
Returns the segment reliability for all measured list mode segments.
A common reliability indicator of zero indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments. If you get a non-zero common reliability indicator, you can use this command to retrieve the individual reliability values of all measured segments for further analysis.
Return values: 
<Reliability>
"Reliability Indicator"
<SegReliability>
Comma-separated list of values, one per measured segment
The meaning of the returned
values is the same as for the common reliability indicator, see
previous parameter.
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.60
Options: 
R&S CMW-KM012
Top