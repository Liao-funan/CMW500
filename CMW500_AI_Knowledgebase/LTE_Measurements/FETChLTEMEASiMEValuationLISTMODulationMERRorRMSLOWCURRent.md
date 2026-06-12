# FETChLTEMEASiMEValuationLISTMODulationMERRorRMSLOWCURRent

Module: LTE Measurements
Source: fe6d3ff87ac44f71.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:SDEViation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:LOW:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:HIGH:EXTReme? 
Return magnitude error RMS values for low and high EVM window position, for all measured list mode segments.
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