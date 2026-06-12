# CALCulateGSMMEASiMEValuationLISTMODulationMERRorRMSCURRent

Module: GSM Measurements
Source: 2552d1a6dc6f4ea0.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:SDEViation? 
Return magnitude error RMS values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErrorRMS>
Comma-separated list of values, one per measured segment
Range: 
0 %  to  100 %
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