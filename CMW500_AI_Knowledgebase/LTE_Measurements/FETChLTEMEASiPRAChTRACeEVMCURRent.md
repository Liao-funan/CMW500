# FETChLTEMEASiPRAChTRACeEVMCURRent

Module: LTE Measurements
Source: 8765b80c5aec4164.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
EVM vs. Subcarrier Results (Traces)
 > 
FETCh:LTE:MEAS<i>:PRACh:TRACe:EVM:CURRent?
FETCh:LTE:MEAS<i>:PRACh:TRACe:EVM:CURRent? 
FETCh:LTE:MEAS<i>:PRACh:TRACe:EVM:AVERage? 
FETCh:LTE:MEAS<i>:PRACh:TRACe:EVM:MAXimum? 
READ:LTE:MEAS<i>:PRACh:TRACe:EVM:CURRent? 
READ:LTE:MEAS<i>:PRACh:TRACe:EVM:AVERage? 
READ:LTE:MEAS<i>:PRACh:TRACe:EVM:MAXimum? 
Return the values of the EVM vs. subcarrier traces. Each value is averaged over the samples in one preamble subcarrier. The results of the current, average and maximum traces can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
The number of results depends on the preamble format.
Format 0 to 3: 839 EVM values, format 4: 139 EVM values
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
V2.0.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top