# FETChWCDMaMEASiMEValuationTRACeCDEMonitorQSIGnalCURRent

Module: WCDMA Measurements
Source: b376fa40bd4541df.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CD Monitor Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:CDEMonitor:QSIGnal:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:CDEMonitor:QSIGnal:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:CDEMonitor:ISIGnal:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:CDEMonitor:QSIGnal:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:CDEMonitor:ISIGnal:CURRent? 
Returns the values of the code domain error traces of the code domain monitor. The results of the I-Signal and Q-Signal traces can be retrieved.
See also 
"Detailed Views: CD Monitor"
Return values: 
<Reliability>
"Reliability Indicator"
<CDE_1> ... <CDE_SF>
One value per code channel. The number of values/channels corresponds to the spreading factor (e.g. 8 values/channels for SF8).
Range: 
-100 dB  to  0 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.2.7
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top