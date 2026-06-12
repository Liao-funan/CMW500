# FETChGPRFMEASiPOWerLISTCURRent

Module: GPRF Measurements
Source: 27f1e7b0ddfc41d3.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for List Mode
 > 
FETCh:GPRF:MEAS<i>:POWer:LIST:CURRent?
FETCh:GPRF:MEAS<i>:POWer:LIST:CURRent? 
<ListIndex>
FETCh:GPRF:MEAS<i>:POWer:LIST:SDEViation? 
<ListIndex>
FETCh:GPRF:MEAS<i>:POWer:LIST:MAXimum:CURRent? 
<ListIndex>
FETCh:GPRF:MEAS<i>:POWer:LIST:MINimum:CURRent? 
<ListIndex>
FETCh:GPRF:MEAS<i>:POWer:LIST:PEAK:MAXimum? 
<ListIndex>
FETCh:GPRF:MEAS<i>:POWer:LIST:PEAK:MINimum? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:CURRent? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:AVERage? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:SDEViation? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:MAXimum:CURRent? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:MINimum:CURRent? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:PEAK:MAXimum? 
<ListIndex>
READ:GPRF:MEAS<i>:POWer:LIST:PEAK:MINimum? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:CURRent? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:AVERage? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:SDEViation? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:MAXimum:CURRent? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:MINimum:CURRent? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:PEAK:MAXimum? 
<ListIndex>
CALCulate:GPRF:MEAS<i>:POWer:LIST:PEAK:MINimum? 
<ListIndex>
Returns power results in list mode, see 
"List Mode: Diagram View"
.
The following results can be retrieved:
"Power Current RMS" (
...:LIST:CURRent?
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
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return a single-value error code for each result listed below.
See also: 
"Error Indicators for Single Results"
Query parameters: 
<StepIndex>
Addresses the power step; must be less or equal than the step count of the active list section (see 
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
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Power>
Power result
Range: 
-100 dBm  to  57 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top