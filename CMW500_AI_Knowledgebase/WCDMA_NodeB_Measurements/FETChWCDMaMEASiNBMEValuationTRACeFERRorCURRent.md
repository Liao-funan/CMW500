# FETChWCDMaMEASiNBMEValuationTRACeFERRorCURRent

Module: WCDMA NodeB Measurements
Source: e52498d4e5a14d52.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Frequency Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:FERRor:SDEViation? 
Returns the values of the carrier frequency error traces for 15 slots. Each current value is averaged over a slot.
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<FreqErr_1> ... <FreqErr_15>
Carrier frequency error trace results, one result per measured slot
Range: 
-1 MHz to 1 MHz
Default unit: 
Hz
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