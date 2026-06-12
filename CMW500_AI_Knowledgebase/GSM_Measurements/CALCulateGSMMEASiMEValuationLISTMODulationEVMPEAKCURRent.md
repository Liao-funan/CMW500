# CALCulateGSMMEASiMEValuationLISTMODulationEVMPEAKCURRent

Module: GSM Measurements
Source: 79ba8eb3571e4de3.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:SDEViation? 
Return error vector magnitude peak values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<EVMpeak>
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