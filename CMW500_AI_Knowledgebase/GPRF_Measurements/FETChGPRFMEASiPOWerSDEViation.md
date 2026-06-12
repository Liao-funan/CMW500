# FETChGPRFMEASiPOWerSDEViation

Module: GPRF Measurements
Source: 075b30d7e0d6405b.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for Single-Step Power Evaluation
 > 
FETCh:GPRF:MEAS<i>:POWer:SDEViation?
FETCh:GPRF:MEAS<i>:POWer:SDEViation? 
READ:GPRF:MEAS<i>:POWer:SDEViation? 
CALCulate:GPRF:MEAS<i>:POWer:SDEViation? 
Returns the standard deviation values, see 
"Measurement Results"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return a single-value error code for each result listed below.
See also: 
"Error Indicators for Single Results"
Return values: 
<Reliability>
See 
"Reliability Indicator"
<PowerStdDev_1> ... <PowerStdDev_n>
Standard deviation of RMS power results for each measured power step. If the list mode is switched off, a single value is returned (n = 1). In list mode, the total number n of results is equal to the list count (
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
Range: 
0 dB  to  78 dB
Default unit: 
dB
Example: 
See 
"Single-Shot and Continuous Power Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top