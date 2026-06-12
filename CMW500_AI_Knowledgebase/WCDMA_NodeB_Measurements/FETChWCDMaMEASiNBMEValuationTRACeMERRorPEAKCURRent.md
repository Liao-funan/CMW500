# FETChWCDMaMEASiNBMEValuationTRACeMERRorPEAKCURRent

Module: WCDMA NodeB Measurements
Source: 302313c3eff14b59.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:PEAK:SDEViation? 
Returns the values of the peak magnitude error traces for 15 slots.
Each current value is determined for a slot. The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErr_1> ... <MagErr_15>
Peak magnitude error trace results, one result per measured slot
Range: 
-100 % to 100 %
Default unit: 
%
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