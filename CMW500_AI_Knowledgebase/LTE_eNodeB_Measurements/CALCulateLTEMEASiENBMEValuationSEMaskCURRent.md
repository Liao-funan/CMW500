# CALCulateLTEMEASiENBMEValuationSEMaskCURRent

Module: LTE eNodeB Measurements
Source: 4a5866db1bab4e64.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Single Values)
 > 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:SEMask:CURRent?
CALCulate:LTE:MEAS<i>:ENB:MEValuation:SEMask:CURRent? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:SEMask:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:SEMask:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:SEMask:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:SEMask:SDEViation? 
READ:LTE:MEAS<i>:ENB:MEValuation:SEMask:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:SEMask:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:SEMask:SDEViation? 
Return the current, average and standard deviation single value results of the spectrum emission measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for spectrum emission measurements exceeding the specified spectrum emission mask limits.
Range: 
0 %  to  100 %
Default unit: 
%
<OBW>
Occupied bandwidth
Range: 
0 MHz  to  40 MHz
Default unit: 
Hz
<TXpower>
Total TX power in the subframe
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
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top