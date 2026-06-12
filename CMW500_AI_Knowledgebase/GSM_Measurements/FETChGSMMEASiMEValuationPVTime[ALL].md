# FETChGSMMEASiMEValuationPVTime[ALL]

Module: GSM Measurements
Source: f4dc35e2ada04f60.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:PVTime[:ALL]?
FETCh:GSM:MEAS<i>:MEValuation:PVTime[:ALL]? 
READ:GSM:MEAS<i>:MEValuation:PVTime[:ALL]? 
CALCulate:GSM:MEAS<i>:MEValuation:PVTime[:ALL]? 
Returns burst power values for slot 0 to slot 7. In addition to the current value statistical values are returned (average, minimum and maximum). The relative number of bursts out of tolerance is also returned.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_BurstsOutTol>
Percentage of measurement intervals / bursts of the statistic count (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
PVTime
) exceeding the specified limits, see 
"Limits (Power vs. Time)"
Range: 
0 %  to  100 %
Default unit: 
%
<3_AvgPow0> ... <10_AvgPow7>
"Average" burst power values for slot 0 to slot 7
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<11_CurPow0> ... <18_CurPow7>
"Current" burst power values for slot 0 to slot 7
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<19_MaxPow0> ... <26_MaxPow7>
"Maximum" burst power values for slot 0 to slot 7
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<27_MinPow0> ... <34_MinPow7>
"Minimum" burst power values for slot 0 to slot 7
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top