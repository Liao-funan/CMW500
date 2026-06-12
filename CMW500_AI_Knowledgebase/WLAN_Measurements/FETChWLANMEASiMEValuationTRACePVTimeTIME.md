# FETChWLANMEASiMEValuationTRACePVTimeTIME

Module: WLAN Measurements
Source: 479e0535728e4fd2.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Burst Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:TIME?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:TIME? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:TIME? 
[<start>, <count>[, <decimation>]]
Return the time indices for the current, average, minimum and maximum power vs. time traces, see 
READ:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
TRACe:
​
PVTime:
​
MAXimum?
.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<TimeValues>
Comma-separated list of max 1024 time values (1024 values without subarrays)
Default unit: 
s
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V3.7.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top