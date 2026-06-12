# FETChGPRFMEASiIQVSlotFERRor

Module: GPRF Measurements
Source: ebc3c9e983054b3f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:FERRor?
FETCh:GPRF:MEAS<i>:IQVSlot:FERRor? 
READ:GPRF:MEAS<i>:IQVSlot:FERRor? 
Returns the frequency errors, see 
"Measurement Results"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<FreqError_1> ... <FreqError_n>
Frequency error for each measurement step. The total number n of results is equal to the total number of steps (see 
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
-500E+3 Hz  to  500E+3 Hz
Default unit: 
Hz
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