# FETChLTEMEASiMEValuationLISTESFLatnessRIPPlenoCURRent

Module: LTE Measurements
Source: 2369cbd7d324412c.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ESFLatness:RIPPle<no>:EXTReme? 
Return equalizer spectrum flatness single value results (ripple 1 or ripple 2) for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<no>
1..2
Ripple 1 = max (range 1) - min (range 1)
Ripple 2 = max (range 2) - min (range 2)
Return values: 
<Reliability>
"Reliability Indicator"
<Ripple>
Comma-separated list of values, one per measured segment
Range: 
0 dB  to  40 dB
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