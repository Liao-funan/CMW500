# FETChGPRFMEASiIQVSlotOFERror

Module: GPRF Measurements
Source: c6155b0746fa446c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:OFERror?
FETCh:GPRF:MEAS<i>:IQVSlot:OFERror? 
READ:GPRF:MEAS<i>:IQVSlot:OFERror? 
CALCulate:GPRF:MEAS<i>:IQVSlot:OFERror? 
Returns the frequency errors, see 
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
<FrequencyError>
Overall frequency error, the arithmetic mean value of the frequency errors for each measurement step (see 
READ:
​
GPRF:
​
MEAS<i>:
​
IQVSlot:
​
FERRor?
).
Range: 
-50E+3 Hz  to  50E+3 Hz
Default unit: 
Hz
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Options: 
R&S CMW-KM011
Top