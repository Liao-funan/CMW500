# FETChLTEMEASiENBMEValuationPERRorCURRent

Module: LTE eNodeB Measurements
Source: 7138eefcf61b4c92.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:PERRor:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:PERRor:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:PERRor:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:PERRor:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:PERRor:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:PERRor:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:PERRor:MAXimum? 
Returns the values of the phase error bar graphs for the OFDM symbols in the measured subframe. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseErrLow0> <PhaseErrHigh0> ... <PhaseErrLow13> <PhaseErrHigh13>
28 values, at low and high EVM window position, OFDM symbol 0 to 13
Range: 
0 deg  to  180 deg
Default unit: 
deg
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