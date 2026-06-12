# CALCulateGSMMEASiMEValuationLISTMODulationMERRorPEAKCURRent

Module: GSM Measurements
Source: 44cf24777e7a471c.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:SDEViation? 
Return magnitude error peak values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErrorPeak>
Comma-separated list of values, one per measured segment
Range: 
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
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