# FETChGPRFMEASiIQVSlotPHASe

Module: GPRF Measurements
Source: 390f411262bc4f52.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:PHASe?
FETCh:GPRF:MEAS<i>:IQVSlot:PHASe? 
READ:GPRF:MEAS<i>:IQVSlot:PHASe? 
Returns the averaged phase values, see 
"Measurement Results"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Phase_1> ... <Phase_n>
Average phase for each measurement step. The total number n of results is equal to the total number of steps (see 
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
-180 deg  to  180 deg
Default unit: 
deg
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