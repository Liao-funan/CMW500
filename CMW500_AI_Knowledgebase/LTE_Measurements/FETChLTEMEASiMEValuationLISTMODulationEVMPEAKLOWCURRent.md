# FETChLTEMEASiMEValuationLISTMODulationEVMPEAKLOWCURRent

Module: LTE Measurements
Source: ac194de6431640fc.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:SDEViation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:LOW:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:HIGH:EXTReme? 
Return error vector magnitude peak values for low and high EVM window position, for all measured list mode segments.
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