# FETChLTEMEASiMEValuationLISTESFLatnessMINRnoCURRent

Module: LTE Measurements
Source: 0b666fb3aa3042a7.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:MINR<no>:EXTReme? 
Return equalizer spectrum flatness single value results (minimum within a range) for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<no>
1..2
Selects the range for which the minimum is returned
Return values: 
<Reliability>
"Reliability Indicator"
<MinR>
Comma-separated list of values, one per measured segment
Range: 
-20 dB  to  20 dB
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