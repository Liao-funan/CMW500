# FETChLTEMEASiMEValuationLISTESFLatnessDIFFerencenoCURRent

Module: LTE Measurements
Source: 7cc5eae30ac94d6e.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:DIFFerence<no>:EXTReme? 
Return equalizer spectrum flatness single value results (differences between ranges) for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<no>
1..2
DIFFerence1
 = max (range 1) - min (range 2)
DIFFerence2
 = max (range 2) - min (range 1)
Return values: 
<Reliability>
"Reliability Indicator"
<Difference>
Comma-separated list of values, one per measured segment
Range: 
-40 dB  to  40 dB
Default unit: 
dB
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