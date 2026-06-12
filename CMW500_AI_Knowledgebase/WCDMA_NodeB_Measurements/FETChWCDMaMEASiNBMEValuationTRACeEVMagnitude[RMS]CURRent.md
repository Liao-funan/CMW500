# FETChWCDMaMEASiNBMEValuationTRACeEVMagnitude[RMS]CURRent

Module: WCDMA NodeB Measurements
Source: dfec939dfa624dc6.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude[:RMS]:SDEViaton? 
Returns the values of the RMS EVM traces for 15 slots.
Each current value is averaged over a slot. The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM_1> ... <EVM_15>
RMS EVM trace results, one result per measured slot
Range: 
0 % to 100 % (MAXimum: -100 % to 100 %)
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