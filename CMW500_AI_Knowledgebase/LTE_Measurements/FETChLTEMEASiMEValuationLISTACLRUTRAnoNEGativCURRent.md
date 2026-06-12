# FETChLTEMEASiMEValuationLISTACLRUTRAnoNEGativCURRent

Module: LTE Measurements
Source: 73d91a0ed8ae41d8.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:NEGativ:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:NEGativ:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:NEGativ:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:POSitiv:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:POSitiv:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:NEGativ:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:NEGativ:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:POSitiv:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:ACLR:UTRA<no>:POSitiv:AVERage? 
Return the ACLR for the first or second adjacent UTRA channel above (
POSitiv
) or below (
NEGativ
) the carrier frequency for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<no>
1..2
Selects first or second adjacent UTRA channel
Return values: 
<Reliability>
"Reliability Indicator"
<UTRA>
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