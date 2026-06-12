# FETChLTEMEASiMEValuationLISTSEMaskOBWCURRent

Module: LTE Measurements
Source: 8e0af38eee45444b.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:OBW:EXTReme? 
Return the occupied bandwidth for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<OBW>
Comma-separated list of values, one per measured segment
Range: 
0 MHz  to  40 MHz
Default unit: 
Hz
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