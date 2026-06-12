# FETChLTEMEASiMEValuationLISTACLREUTRaCURRent

Module: LTE Measurements
Source: 084a70d6c0084b2e.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:AVERage? 
Return the power in the allocated E-UTRA channel for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<EUTRA>
Comma-separated list of values, one per measured segment
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
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