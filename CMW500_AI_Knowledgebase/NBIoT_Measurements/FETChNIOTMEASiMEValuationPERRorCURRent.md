# FETChNIOTMEASiMEValuationPERRorCURRent

Module: NBIoT Measurements
Source: c19617c694a74f90.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:MEValuation:PERRor:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:PERRor:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:PERRor:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:PERRor:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:PERRor:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:PERRor:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:PERRor:MAXimum? 
Returns the values of the phase error bar graphs for the SC-FDMA symbols in the measured slot. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
Comma-separated list of 7 results, for SC-FDMA symbol 0 to 6
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
V3.5.10
Top