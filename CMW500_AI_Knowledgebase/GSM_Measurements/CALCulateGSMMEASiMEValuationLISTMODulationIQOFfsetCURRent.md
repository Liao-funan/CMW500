# CALCulateGSMMEASiMEValuationLISTMODulationIQOFfsetCURRent

Module: GSM Measurements
Source: f34f24ff6c544394.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:SDEViation? 
Return I/Q origin offset results for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<IQoffset>
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