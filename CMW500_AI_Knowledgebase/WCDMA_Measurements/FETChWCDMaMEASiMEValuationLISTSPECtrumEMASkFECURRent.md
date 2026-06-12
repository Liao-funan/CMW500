# FETChWCDMaMEASiMEValuationLISTSPECtrumEMASkFECURRent

Module: WCDMA Measurements
Source: ec973eaf76c045f5.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:MAXimum? 
Return the limit line margin values in the 4 emission mask areas above the carrier frequency for all measured list mode segments.
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