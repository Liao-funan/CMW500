# FETChLTEMEASiMEValuationLISTESFLatnessSCINdexMINimumnoCURRent

Module: LTE Measurements
Source: e3910ba8b0cd4c42.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:SCINdex:MINimum<no>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:SCINdex:MINimum<no>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:SCINdex:MAXimum<no>:CURRent? 
Return subcarrier indices of the equalizer spectrum flatness measurement for all measured list mode segments.
At these SC indices, the  current 
MINimum
 or 
MAXimum
 power of the equalizer coefficients has been detected within the selected range.
Suffix: 
<no>
1..2
Selects the range
Return values: 
<Reliability>
"Reliability Indicator"
<Index>
Comma-separated list of values, one per measured segment
Range: 
0  to  1199
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KM012
Top