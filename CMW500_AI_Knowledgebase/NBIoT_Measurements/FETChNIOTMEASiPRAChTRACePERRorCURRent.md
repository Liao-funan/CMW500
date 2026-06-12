# FETChNIOTMEASiPRAChTRACePERRorCURRent

Module: NBIoT Measurements
Source: b4c758e77ac64573.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PERRor:CURRent?
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PERRor:CURRent? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PERRor:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PERRor:MAXimum? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PERRor:CURRent? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PERRor:AVERage? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PERRor:MAXimum? 
Return the values of the phase error traces. Each value is averaged over the samples in one preamble symbol. The results of the current, average and maximum traces can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
Comma-separated list of 20 results, one result per symbol
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
V3.7.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top