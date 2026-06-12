# FETChGPRFMEASiIQVSlotLEVel

Module: GPRF Measurements
Source: 07ef8cb35e2b488d.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:LEVel?
FETCh:GPRF:MEAS<i>:IQVSlot:LEVel? 
READ:GPRF:MEAS<i>:IQVSlot:LEVel? 
Returns the averaged signal levels, see 
"Measurement Results"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Level_1> ... <Level_n>
Average level for each measurement step. The total number n of results is equal to the total number of steps (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQVSlot:
​
SCOunt
).
Range: 
-150 dBm  to  60 dBm
Default unit: 
dBm
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Top