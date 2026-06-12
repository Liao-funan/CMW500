# FETChLTEMEASiMEValuationLISTMODulationTERRorCURRent

Module: LTE Measurements
Source: cb1adc5145cc45cd.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TERRor:EXTReme? 
Return transmit time error values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<TimingError>
Comma-separated list of values, one per measured segment
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts (basic LTE time unit)
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