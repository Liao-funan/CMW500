# FETChWCDMaMEASiMEValuationLISTSPECtrumEMASkABCURRent

Module: WCDMA Measurements
Source: aeed20ceb5f24bbc.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:MAXimum? 
Return the limit line margin values in the 4 emission mask areas below the carrier frequency for all measured list mode segments.
A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Return values: 
<Reliability>
"Reliability Indicator"
<EMaskMargin>
Comma-separated list of values, one per measured segment
Range: 
-100 dB  to  90 dB
Default unit: 
dB
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM012
Top