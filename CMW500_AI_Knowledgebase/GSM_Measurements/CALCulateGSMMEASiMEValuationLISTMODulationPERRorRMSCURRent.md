# CALCulateGSMMEASiMEValuationLISTMODulationPERRorRMSCURRent

Module: GSM Measurements
Source: f3a227cdb0f142e8.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:SDEViation? 
Return phase error RMS values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseErrorRMS>
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