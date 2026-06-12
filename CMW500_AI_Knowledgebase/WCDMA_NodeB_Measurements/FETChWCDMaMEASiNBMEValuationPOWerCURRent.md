# FETChWCDMaMEASiNBMEValuationPOWerCURRent

Module: WCDMA NodeB Measurements
Source: 04a63ce040b4484f.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:MINimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:POWer:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:POWer:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:POWer:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:POWer:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:POWer:MINimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:POWer:SDEViation? 
Returns the single power values. Each current value is averaged over frame.
The results of the current, average, minimum, maximum and standard deviation traces can be retrieved. The minimum and standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: TX Measurement"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Average>
NodeB power
Range: 
-100 dBm  to  100 dBm
<CPICH>
CPICH power
Range: 
-100 dBm  to  100 dBm
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