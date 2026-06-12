# FETChLTEMEASiMEValuationPMONitorCURRent

Module: LTE Measurements
Source: 90cb7843a5014756.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Monitor Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CURRent? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:AVERage? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:MINimum? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:SDEViation? 
Returns the total TX power of all carriers.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count that exceed the specified limits
Range: 
0 %  to  100 %
Default unit: 
%
<TXpower>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.40
Top