# FETChWCDMaMEASiNBMEValuationTRACeEVMagnitudePEAKCURRent

Module: WCDMA NodeB Measurements
Source: a3a71ed0e6ff45dc.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:PEAK:SDEViaton? 
Returns the values of the peak EVM traces for 15 slots. Each current value is determined for a slot.
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM_1> ... <EVM_15>
Peak EVM trace results, one result per measured slot
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