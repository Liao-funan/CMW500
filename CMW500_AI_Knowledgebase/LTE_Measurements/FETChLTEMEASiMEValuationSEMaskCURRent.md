# FETChLTEMEASiMEValuationSEMaskCURRent

Module: LTE Measurements
Source: 4de6e704455e4ffe.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:SEMask:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:SEMask:CURRent? 
READ:LTE:MEAS<i>:MEValuation:SEMask:AVERage? 
READ:LTE:MEAS<i>:MEValuation:SEMask:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:SEMask:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:SEMask:AVERage? 
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
Total TX power in the slot over all component carriers
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
V1.0.10.1
Top