# FETChLTEMEASiSRSTRACePDYNamicsCURRent

Module: LTE Measurements
Source: 6bfa88161fca44fe.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Power Dynamics Results (Traces)
 > 
FETCh:LTE:MEAS<i>:SRS:TRACe:PDYNamics:CURRent?
FETCh:LTE:MEAS<i>:SRS:TRACe:PDYNamics:CURRent? 
FETCh:LTE:MEAS<i>:SRS:TRACe:PDYNamics:AVERage? 
FETCh:LTE:MEAS<i>:SRS:TRACe:PDYNamics:MAXimum? 
READ:LTE:MEAS<i>:SRS:TRACe:PDYNamics:CURRent? 
READ:LTE:MEAS<i>:SRS:TRACe:PDYNamics:AVERage? 
READ:LTE:MEAS<i>:SRS:TRACe:PDYNamics:MAXimum? 
Return the values of the power dynamics traces. Each value is sampled with 48 T
s
, corresponding to 1.5625 µs. The results of the current, average and maximum traces can be retrieved.
Note that the GUI shows only the beginning of the trace returned via remote command. The last 800 µs cannot be displayed at the GUI.
See also 
"Measurement Results"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
2048 power values, from -1100 µs to +2098.4375 µs relative to the start of the SRS symbol. The values have a spacing of 1.5625 µs. The 705
th
 value is at the start of the SRS symbol (0 µs).
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
V2.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top