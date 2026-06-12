# FETChWCDMaMEASiNBMEValuationTRACePERRor[RMS]CURRent

Module: WCDMA NodeB Measurements
Source: 38861d80428e45da.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor[:RMS]:SDEViation? 
Returns the values of the RMS phase error traces for 15 slots.
Each current value is averaged over a slot. The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseErr_1> ... <PhaseErr_15>
RMS phase error trace results, one result per measured slot
Range: 
-180 deg to 180 deg
Default unit: 
deg
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