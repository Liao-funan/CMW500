# CALCulateGSMMEASiMEValuationLISTMODulationAPDelayCURRent

Module: GSM Measurements
Source: 1af2a16eb1dd419f.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:SDEViation? 
Return AM-PM delay results for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<AMPMdelay>
Comma-separated list of values, one per measured segment
Range: 
-0.9225E-6 s  to  0.9225E-6 s
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