# FETChWCDMaMEASiNBMEValuationTRACeCDPowerCURRent

Module: WCDMA NodeB Measurements
Source: 142ecbec330942e3.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CD Monitor Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:MINimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:MINimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDPower:SDEViation? 
Returns the values of the RMS CDP vs. slot traces for 15 slots.
Each current value is averaged over a slot. The results of the current, average, minimum, maximum and standard deviation traces can be retrieved. The standard deviation traces cannot be displayed at the GUI.
See also 
"Detailed Views: CDP, CDE and CD Monitor"
Return values: 
<Reliability>
"Reliability Indicator"
<CDP_1> ... <CDP_15>
RMS CDP trace results, one result per measured slot
Range: 
-100 dB  to  100 dB
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