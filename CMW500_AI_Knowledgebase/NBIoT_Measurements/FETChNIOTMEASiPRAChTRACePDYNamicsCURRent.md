# FETChNIOTMEASiPRAChTRACePDYNamicsCURRent

Module: NBIoT Measurements
Source: f8431eaa22f04803.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Power Dynamics Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:CURRent?
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:CURRent? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:MAXimum? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:CURRent? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:AVERage? 
READ:NIOT:MEAS<i>:PRACh:TRACe:PDYNamics:MAXimum? 
Return the values of the power dynamics traces. Each value is sampled with 96 T
s
, corresponding to 3.125 µs. The results of the current, average and maximum traces can be retrieved.
See also 
"View Power Dynamics"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
2816 power values, from -1200 µs to +7596.875 µs relative to the start of the preamble. The values have a spacing of 3.125
 
µs. The 385
th
 value is at the start of the preamble (0 µs).
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
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