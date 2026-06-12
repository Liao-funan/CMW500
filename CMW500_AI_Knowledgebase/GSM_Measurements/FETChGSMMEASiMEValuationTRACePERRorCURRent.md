# FETChGSMMEASiMEValuationTRACePERRorCURRent

Module: GSM Measurements
Source: 9bc4f955b5f74783.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PERRor:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PERRor:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PERRor:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:PERRor:MAXimum? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PERRor:CURRent? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PERRor:AVERage? 
READ:GSM:MEAS<i>:MEValuation:TRACe:PERRor:MAXimum? 
Returns the values of the phase error traces. The results of the current, average and minimum/maximum traces can be retrieved.
Return values: 
<Reliability>
"Reliability Indicator"
<Result_1> ... <Result_n>
n phase error results, depending on the type of modulation
8PSK/16-QAM modulation: 142 values (one value per symbol period, symbol 3 to symbol 144)
GMSK modulation: 588 values (four values per symbol period, symbol 0.5 to symbol 147.5)
Access burst: 348 values (four values per symbol period, symbol 0.5 to symbol 87.5)
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top