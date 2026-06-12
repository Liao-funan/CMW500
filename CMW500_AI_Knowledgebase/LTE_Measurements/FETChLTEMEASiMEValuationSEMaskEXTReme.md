# FETChLTEMEASiMEValuationSEMaskEXTReme

Module: LTE Measurements
Source: 6507917cc3a9402f.htm

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
FETCh:LTE:MEAS<i>:MEValuation:SEMask:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:SEMask:EXTReme? 
READ:LTE:MEAS<i>:MEValuation:SEMask:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:SEMask:EXTReme? 
Return the extreme single value results of the spectrum emission measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
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
<TXpowerMin>
Minimum total TX power in the slot
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<TXpowerMax>
Maximum total TX power in the slot
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
V2.0.10
Top