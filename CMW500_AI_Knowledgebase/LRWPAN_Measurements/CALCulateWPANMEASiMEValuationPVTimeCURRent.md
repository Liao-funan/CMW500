# CALCulateWPANMEASiMEValuationPVTimeCURRent

Module: LRWPAN Measurements
Source: 8e1a42954857405f.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Power Measurement Results
 > 
CALCulate:WPAN:MEAS<i>:MEValuation:PVTime:CURRent?
CALCulate:WPAN:MEAS<i>:MEValuation:PVTime:CURRent? 
CALCulate:WPAN:MEAS<i>:MEValuation:PVTime:AVERage? 
CALCulate:WPAN:MEAS<i>:MEValuation:PVTime:MAXimum? 
CALCulate:WPAN:MEAS<i>:MEValuation:PVTime:MINimum? 
FETCh:WPAN:MEAS<i>:MEValuation:PVTime:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:PVTime:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:PVTime:MAXimum? 
FETCh:WPAN:MEAS<i>:MEValuation:PVTime:MINimum? 
READ:WPAN:MEAS<i>:MEValuation:PVTime:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:PVTime:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:PVTime:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:PVTime:MINimum? 
Returns the power single results.
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
PVTime
) exceeding the specified limits, see 
"Power Limits"
.
Additional parameters: OFF | ON (disables | enables this check)
Range: 
0 %  to  100 %
Default unit: 
%
<AveragePower>
Average transmit power of the DUT
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
Example: 
See 
"Performing Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top