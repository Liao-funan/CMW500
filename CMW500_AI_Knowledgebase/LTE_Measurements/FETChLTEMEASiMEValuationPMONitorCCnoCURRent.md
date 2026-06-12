# FETChLTEMEASiMEValuationPMONitorCCnoCURRent

Module: LTE Measurements
Source: e492cc1cecfd4578.htm

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
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:CURRent? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:AVERage? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:MINimum? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:PMONitor:CC<no>:SDEViation? 
Returns the TX power of carrier CC<no>.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Suffix: 
<no>
1..4
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
V3.7.30
Top