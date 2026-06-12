# FETChLTEMEASiMEValuationLISTMODulationTPOWerCURRent

Module: LTE Measurements
Source: a8e9a2e62fab4375.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:MINimum? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:TPOWer:MAXimum? 
Return user equipment power values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<TXpower>
Comma-separated list of values, one per measured segment
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
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