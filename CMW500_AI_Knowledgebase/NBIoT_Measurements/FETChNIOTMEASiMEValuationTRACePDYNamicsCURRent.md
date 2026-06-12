# FETChNIOTMEASiMEValuationTRACePDYNamicsCURRent

Module: NBIoT Measurements
Source: e7d66320f3084dac.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Dynamics Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:PDYNamics:MAXimum? 
Return the values of the left power dynamics trace (start of first allocated RU). The results of the current, average and maximum traces can be retrieved.
See also 
"View Power Dynamics"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of 1408 power values
The 705
th
 value refers to the time 0 µs, the start of the first allocated RU.
The other details depend on the subcarrier spacing, see table.
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Trace structure depending on subcarrier spacing
SC spacing
Covered time
Value spacing
3.75 kHz
-2200 μs to 2196.875 μs
3.125 μs
15 kHz
-1100 μs to 1098.4375 μs
1.5625 μs
Top