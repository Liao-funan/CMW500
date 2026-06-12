# FETChGSMMEASiMEValuationTRACePVTimeCURRent

Module: GSM Measurements
Source: c00a04bfb48441e8.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Traces)
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
Returns the values of the power vs. time traces. 16 results are available for each symbol period of the measured slots (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
MSLots
). The trace covers 18.25 symbol periods before the beginning of the first slot in the measured slot range, 10 symbol periods after the end of the last measured slot. The length of the trace is given as:
The first sample of the "Measurement Slot" is at position m in the trace, where:
The results of the current, average minimum and maximum traces can be retrieved.
Return values: 
<Reliability>
"Reliability Indicator"
<Result_1> ... <Result_n>
Range: 
-100 dB  to  100 dB
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top