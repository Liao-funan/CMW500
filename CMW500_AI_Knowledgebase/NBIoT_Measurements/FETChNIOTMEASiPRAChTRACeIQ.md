# FETChNIOTMEASiPRAChTRACeIQ

Module: NBIoT Measurements
Source: 78603111cfd14568.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
I/Q Constellation Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:PRACh:TRACe:IQ?
FETCh:NIOT:MEAS<i>:PRACh:TRACe:IQ? 
Returns the results in the I/Q constellation diagram.
The return order is <Reliability>, <IPhase>
1
, <QPhase>
1
, <IPhase>
2
, <QPhase>
2
, ...
See also 
"View I/Q Constellation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<IPhase>
Normalized I amplitude
Range: 
-2  to  2
<QPhase>
Normalized Q amplitude
Range: 
-2  to  2
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Traces and Bar Graphs"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top