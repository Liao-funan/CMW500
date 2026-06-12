# FETChLTEMEASiMEValuationMERRorCURRent

Module: LTE Measurements
Source: bac23a39431545ec.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:LTE:MEAS<i>:MEValuation:MERRor:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:MERRor:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:MERRor:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:MERRor:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:MERRor:CURRent? 
READ:LTE:MEAS<i>:MEValuation:MERRor:AVERage? 
READ:LTE:MEAS<i>:MEValuation:MERRor:MAXimum? 
Returns the values of the magnitude error bar graphs for the SC-FDMA symbols in the measured slot. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErrLow0> <MagErrHigh0> ... <MagErrLow5/6> <MagErrHigh5/6>
Magnitude error values, low and high EVM window position.
Normal cyclic prefix: values for SC-FDMA symbol 0 to 6, including the reference symbol as symbol number 3.
Extended cyclic prefix: values for SC-FDMA symbol 0 to 5, including the reference symbol as symbol number 2.
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Top