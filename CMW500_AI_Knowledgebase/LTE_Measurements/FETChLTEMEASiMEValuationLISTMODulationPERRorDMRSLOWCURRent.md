# FETChLTEMEASiMEValuationLISTMODulationPERRorDMRSLOWCURRent

Module: LTE Measurements
Source: 040197a0062c4814.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:SDEViation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:LOW:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:EXTReme? 
Return phase error DMRS values for low and high EVM window position, for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<PhErrorDMRS>
Comma-separated list of values, one per measured segment
Range: 
0 deg  to  180 deg
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