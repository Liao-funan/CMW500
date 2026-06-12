# FETChLTEMEASiMEValuationLISTMODulationFERRorCURRent

Module: LTE Measurements
Source: 9868b6b16ca34a20.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:FERRor:EXTReme? 
Return carrier frequency error values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<FrequencyError>
Comma-separated list of values, one per measured segment
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
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