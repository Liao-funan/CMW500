# FETChWCDMaMEASiNBMEValuationTRACePERRorPEAKCURRent

Module: WCDMA NodeB Measurements
Source: 2bc52712629b4589.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:PEAK:SDEViation? 
Returns the values of the peak phase error traces for 15 slots.
Each current value is determined for a slot. The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseErr_1> ... <PhaseErr_15>
Peak phase error trace results, one result per measured slot
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