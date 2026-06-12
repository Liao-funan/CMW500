# FETChNIOTMEASiMEValuationMERRorCURRent

Module: NBIoT Measurements
Source: 6bc66473cf84495e.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:MEValuation:MERRor:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:MERRor:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:MERRor:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:MERRor:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:MERRor:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:MERRor:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:MERRor:MAXimum? 
Returns the values of the magnitude error bar graphs for the SC-FDMA symbols in the measured slot. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
Comma-separated list of 7 results, for SC-FDMA symbol 0 to 6
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
V3.5.10
Top