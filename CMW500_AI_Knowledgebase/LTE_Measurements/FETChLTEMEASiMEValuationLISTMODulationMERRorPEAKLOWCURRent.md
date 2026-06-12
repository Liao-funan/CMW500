# FETChLTEMEASiMEValuationLISTMODulationMERRorPEAKLOWCURRent

Module: LTE Measurements
Source: 561aca1ec0d9441c.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:SDEViation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:HIGH:EXTReme? 
Return magnitude error peak values for low and high EVM window position, for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErrPeak>
Comma-separated list of values, one per measured segment
Range: 
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
Default unit: 
%
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