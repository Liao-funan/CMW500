# FETChLTEMEASiMEValuationLISTMODulationPPOWerCURRent

Module: LTE Measurements
Source: 8ea88259ca974083.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:MINimum? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PPOWer:MAXimum? 
Return user equipment peak power values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<PeakPower>
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