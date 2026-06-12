# FETChWCDMaMEASiNBMEValuationTRACePOWerCURRent

Module: WCDMA NodeB Measurements
Source: f394c73aa24d4112.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:MINimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:MINimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:POWer:SDEViation? 
Returns the values of the NodeB power traces for 15 slots.
Each current value is averaged over a slot. The results of the current, average, minimum, maximum and standard deviation traces can be retrieved. The minimum and standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Power"
.
Return values: 
<Reliability>
"Reliability Indicator"
<NBpower_1> ... <NBpower_15>
One result per measured slot
Range: 
-100 dBm to 100 dBm (SDEViation: 0 dB to 100 dB)
Default unit: 
dBm (SDEViation: dB)
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