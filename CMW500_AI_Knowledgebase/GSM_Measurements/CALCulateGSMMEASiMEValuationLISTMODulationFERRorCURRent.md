# CALCulateGSMMEASiMEValuationLISTMODulationFERRorCURRent

Module: GSM Measurements
Source: b9d0106f38b04126.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:SDEViation? 
Return carrier frequency error results for all measured list mode segments.
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
-56000 Hz  to  56000 Hz
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