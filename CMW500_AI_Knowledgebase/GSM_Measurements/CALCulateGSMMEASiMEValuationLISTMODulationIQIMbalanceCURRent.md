# CALCulateGSMMEASiMEValuationLISTMODulationIQIMbalanceCURRent

Module: GSM Measurements
Source: b0233b36e673404c.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:SDEViation? 
Return I/Q imbalance results for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<IQimbalance>
Comma-separated list of values, one per measured segment
Range: 
-100 dB  to  0 dB
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