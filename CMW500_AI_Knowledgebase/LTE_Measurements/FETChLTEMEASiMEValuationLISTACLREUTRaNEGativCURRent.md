# FETChLTEMEASiMEValuationLISTACLREUTRaNEGativCURRent

Module: LTE Measurements
Source: b2010b02960e4e29.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:NEGativ:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:NEGativ:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:NEGativ:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:POSitiv:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:POSitiv:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:NEGativ:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:NEGativ:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:POSitiv:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:EUTRa:POSitiv:AVERage? 
Return the ACLR for the first adjacent E-UTRA channel above (
POSitiv
) or below (
NEGativ
) the carrier frequency for all measured list mode segments.
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
0 dB  to  100 dB
Default unit: 
dB
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