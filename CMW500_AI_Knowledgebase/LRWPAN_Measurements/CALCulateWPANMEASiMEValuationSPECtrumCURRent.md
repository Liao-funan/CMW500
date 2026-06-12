# CALCulateWPANMEASiMEValuationSPECtrumCURRent

Module: LRWPAN Measurements
Source: 34b2674a628f4998.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Spectrum Measurement Results
 > 
CALCulate:WPAN:MEAS<i>:MEValuation:SPECtrum:CURRent?
CALCulate:WPAN:MEAS<i>:MEValuation:SPECtrum:CURRent? 
CALCulate:WPAN:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
FETCh:WPAN:MEAS<i>:MEValuation:SPECtrum:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:SPECtrum:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
Returns the current and maximum spectrum single results.
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
<BurstOutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
WPAN:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
SPECtrum
) exceeding the specified limits, see 
"Spectrum Requirements"
.
Additional parameters: OFF | ON (disables | enables this check)
Range: 
0 %  to  100 %
<AveragePower>
Average burst power
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top