# FETChWCDMaMEASiNBMEValuationTRACeMERRor[RMS]CURRent

Module: WCDMA NodeB Measurements
Source: 6c5c1437b46145e0.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor[:RMS]:SDEViation? 
Returns the values of the RMS magnitude error traces for 15 slots.
Each current value is averaged over a slot. The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErr_1> ... <MagErr_15>
RMS magnitude error trace results, one result per measured slot
Range: 
0 % to 100 %
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