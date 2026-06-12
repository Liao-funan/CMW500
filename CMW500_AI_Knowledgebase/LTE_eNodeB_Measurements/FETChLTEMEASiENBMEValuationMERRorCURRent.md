# FETChLTEMEASiENBMEValuationMERRorCURRent

Module: LTE eNodeB Measurements
Source: 2de4cd0ffd9341d4.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MERRor:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:MERRor:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MERRor:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MERRor:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:MERRor:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:MERRor:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:MERRor:MAXimum? 
Returns the values of the magnitude error bar graphs for the OFDM symbols in the measured subframe. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErrLow0> <MagErrHigh0> ... <MagErrLow13> <MagErrHigh13>
28 magnitude error values, at low and high EVM window position, OFDM symbol 0 to 13
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
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top