# FETChGSMMEASiMEValuationLISTPVTimeSVECtorSUBVectornoCURRent

Module: GSM Measurements
Source: 32ea8476a03c4c29.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:MINimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:MAXimum? 
Return burst power at a specific burst position for all measured list mode segments.
Suffix: 
<no>
1..12
Index selecting one of the following burst positions in µs: –28, –18, –10, 0, 2, 4, 538.2, 540.2, 542.8, 552.8, 560.8, 570.8
Return values: 
<Reliability>
"Reliability Indicator"
<Subvector>
Comma-separated list of values, one per measured segment
Range: 
-100 dB  to  100 dB
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