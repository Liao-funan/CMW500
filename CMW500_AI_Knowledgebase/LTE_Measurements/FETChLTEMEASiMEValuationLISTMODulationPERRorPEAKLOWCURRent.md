# FETChLTEMEASiMEValuationLISTMODulationPERRorPEAKLOWCURRent

Module: LTE Measurements
Source: d178f323e9394c6c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:SDEViation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:LOW:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:EXTReme? 
Return phase error peak values for low and high EVM window position, for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<PhErrorPeak>
Comma-separated list of values, one per measured segment
Range: 
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
Default unit: 
deg
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KM012
Top