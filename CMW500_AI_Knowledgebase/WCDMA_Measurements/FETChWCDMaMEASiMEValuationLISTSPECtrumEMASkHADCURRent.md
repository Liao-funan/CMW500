# FETChWCDMaMEASiMEValuationLISTSPECtrumEMASkHADCURRent

Module: WCDMA Measurements
Source: b078dbe67c2d4905.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:MAXimum? 
Return the limit line margin values for limit line H for all measured list mode segments.
A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Return values: 
<Reliability>
"Reliability Indicator"
<EMaskMargin>
Comma-separated list of values, one per measured segment
Range: 
-130 dB  to  130 dB
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