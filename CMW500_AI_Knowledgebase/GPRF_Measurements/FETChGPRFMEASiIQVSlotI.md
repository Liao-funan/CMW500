# FETChGPRFMEASiIQVSlotI

Module: GPRF Measurements
Source: 2b15b2ff78474cfa.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:I?
FETCh:GPRF:MEAS<i>:IQVSlot:I? 
FETCh:GPRF:MEAS<i>:IQVSlot:Q? 
READ:GPRF:MEAS<i>:IQVSlot:I? 
READ:GPRF:MEAS<i>:IQVSlot:Q? 
Returns the averaged I and Q amplitudes, see 
"Measurement Results"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Amplitude_1> ... <Amplitude_n>
Average I or Q amplitude for each measurement step. The total number n of results is equal to the total number of steps (see 
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
-150 V  to  150 V
Default unit: 
V
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