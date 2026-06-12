# CALCulateGSMMEASiMEValuationLISTMODulationPERRorPERCentile

Module: GSM Measurements
Source: fba2ea2672a142fe.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PERCentile?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PERCentile? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PERCentile? 
Return phase error 95th percentile values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseError>
Comma-separated list of values, one per measured segment
Range: 
0 deg  to  180 deg
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