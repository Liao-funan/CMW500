# FETChNIOTMEASiMEValuationLISTSRELiability

Module: NBIoT Measurements
Source: 486f855f4d6b4fc5.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SRELiability?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SRELiability? 
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
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top