# FETChWCDMaMEASiNBMEValuationTRACeCDERrorCURRent

Module: WCDMA NodeB Measurements
Source: 0b9a5bac7618411b.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CD Monitor Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:CDERror:SDEViation? 
Returns the values of the RMS CDE vs. slot traces for 15 slots.
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation traces cannot be displayed at the GUI.
See also 
"Detailed Views: CDP, CDE and CD Monitor"
Return values: 
<Reliability>
"Reliability Indicator"
<CDE_1> ... <CDE_15>
RMS CDE trace results, one result per measured slot
Range: 
-100 dB to 100 dB
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