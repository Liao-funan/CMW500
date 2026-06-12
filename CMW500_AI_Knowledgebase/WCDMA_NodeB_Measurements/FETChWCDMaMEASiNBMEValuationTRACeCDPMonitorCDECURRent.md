# FETChWCDMaMEASiNBMEValuationTRACeCDPMonitorCDECURRent

Module: WCDMA NodeB Measurements
Source: f6d2d00c453a4d7e.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CD Monitor Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPMonitor:CDE:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPMonitor:CDE:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPMonitor:CDE:CURRent? 
Returns the values of the code domain error traces of the code domain monitor in CDP view.
See also 
"Detailed Views: CDP, CDE and CD Monitor"
Return values: 
<Reliability>
"Reliability Indicator"
<CDE_1> ... <CDE_512>
One value per code channel. The number of values/channels corresponds to the fixed spreading factor 512.
Range: 
-150 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top