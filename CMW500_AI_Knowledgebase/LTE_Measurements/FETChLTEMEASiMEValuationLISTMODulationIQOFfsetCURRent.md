# FETChLTEMEASiMEValuationLISTMODulationIQOFfsetCURRent

Module: LTE Measurements
Source: e5c633f9e6494ff9.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:EXTReme? 
Return I/Q origin offset values for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<IQOffset>
Comma-separated list of values, one per measured segment
Range: 
-100 dBc  to  0 dBc
Default unit: 
dBc
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