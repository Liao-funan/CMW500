# CALCulateGSMMEASiMEValuationLISTMODulationTERRorCURRent

Module: GSM Measurements
Source: 1119f7a19cb14913.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:SDEViation? 
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
-100 Sym  to  100 Sym
Default unit: 
Sym
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