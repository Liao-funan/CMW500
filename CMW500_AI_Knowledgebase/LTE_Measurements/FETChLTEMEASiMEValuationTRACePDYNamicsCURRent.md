# FETChLTEMEASiMEValuationTRACePDYNamicsCURRent

Module: LTE Measurements
Source: 9950e8268d694602.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Dynamics Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:CURRent? 
READ:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:AVERage? 
READ:LTE:MEAS<i>:MEValuation:TRACe:PDYNamics:MAXimum? 
Return the values of the power dynamics traces. Each value is sampled with 48 T
s
, corresponding to 1.5625 µs. The results of the current, average and maximum traces can be retrieved.
See also 
"View Power Dynamics"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
2048 power values, from -1100 µs to +2098.4375 µs relative to the start of the measure subframe. The values have a spacing of 1.5625 µs. The 705
th
 value is at the start of the "Measure Subframe" (0 µs).
The diagram at the display shows only a subsection of this trace, depending on the selected time mask.
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
V2.0.10
Top