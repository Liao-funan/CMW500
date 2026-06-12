# FETChNIOTMEASiPRAChTRACeMERRorCURRent

Module: NBIoT Measurements
Source: f8b7db21f4aa4ad8.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:MERRor:CURRent?
FETCh:NIOT:MEAS<i>:PRACh:TRACe:MERRor:CURRent? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:MERRor:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:MERRor:MAXimum? 
READ:NIOT:MEAS<i>:PRACh:TRACe:MERRor:CURRent? 
READ:NIOT:MEAS<i>:PRACh:TRACe:MERRor:AVERage? 
READ:NIOT:MEAS<i>:PRACh:TRACe:MERRor:MAXimum? 
Return the values of the magnitude error traces. Each value is averaged over the samples in one preamble symbol. The results of the current, average and maximum traces can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
Comma-separated list of 20 results, one result per symbol
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
V3.7.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top