# FETChGPRFMEASiPOWerCURRent

Module: GPRF Measurements
Source: 7f944d93d3cc4295.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for Single-Step Power Evaluation
 > 
FETCh:GPRF:MEAS<i>:POWer:CURRent?
FETCh:GPRF:MEAS<i>:POWer:CURRent? 
FETCh:GPRF:MEAS<i>:POWer:MINimum:CURRent? 
FETCh:GPRF:MEAS<i>:POWer:MAXimum:CURRent? 
FETCh:GPRF:MEAS<i>:POWer:AVERage? 
FETCh:GPRF:MEAS<i>:POWer:PEAK:MINimum? 
FETCh:GPRF:MEAS<i>:POWer:PEAK:MAXimum? 
READ:GPRF:MEAS<i>:POWer:CURRent? 
READ:GPRF:MEAS<i>:POWer:MINimum:CURRent? 
READ:GPRF:MEAS<i>:POWer:MAXimum:CURRent? 
READ:GPRF:MEAS<i>:POWer:AVERage? 
READ:GPRF:MEAS<i>:POWer:PEAK:MINimum? 
READ:GPRF:MEAS<i>:POWer:PEAK:MAXimum? 
CALCulate:GPRF:MEAS<i>:POWer:CURRent? 
CALCulate:GPRF:MEAS<i>:POWer:MINimum:CURRent? 
CALCulate:GPRF:MEAS<i>:POWer:MAXimum:CURRent? 
CALCulate:GPRF:MEAS<i>:POWer:AVERage? 
CALCulate:GPRF:MEAS<i>:POWer:PEAK:MINimum? 
CALCulate:GPRF:MEAS<i>:POWer:PEAK:MAXimum? 
Returns RF power results, see 
"Measurement Results"
.
The following results can be retrieved:
"Power Current RMS" (
...:POWer:CURRent?
)
"Power Current Min." (
...:MINimum:CURRent?
)
"Power Current Max." (
...:MAXimum:CURRent?
)
"Power Average RMS" (
...:AVERage?
)
"Power Minimum" (
...:PEAK:MINimum?
)
"Power Maximum" (
...:PEAK:MAXimum?
)
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Value_1>, ..., <Value_n>
If list mode is switched off, a single value is returned. In list mode, n is equal to the step count (
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
COUNt?
).
CALCulate
 commands return error indicators for each measured power step.
FETCh/READ
 commands return RF power values for each measured power step.
Range: 
-100 dBm  to  57 dBm
Default unit: 
dBm
Example: 
FETCh:GPRF:MEAS:POWer:CURRent?
With list mode enabled and list count = 20, for an error-free power measurement this command returns something like 
0,-6.000000E+000,...
 (19 more power values).
Example: 
CALCulate:GPRF:MEAS1:POWer:CURRent?
If overflow (OFL) occurred in the 2nd and 5th list step, this command returns something like 
3,OK,OFL,OK,OK,OFL,OK,...
 (14 more error indicators).
Example: 
For additional examples, see 
"Single-Shot and Continuous Power Measurements"
.
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top