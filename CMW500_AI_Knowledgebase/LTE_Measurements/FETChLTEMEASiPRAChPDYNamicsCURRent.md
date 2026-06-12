# FETChLTEMEASiPRAChPDYNamicsCURRent

Module: LTE Measurements
Source: 8b5bb84b1df54924.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Power Dynamics Results (Single Values)
 > 
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:CURRent?
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:CURRent? 
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:AVERage? 
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:MINimum? 
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:MAXimum? 
FETCh:LTE:MEAS<i>:PRACh:PDYNamics:SDEViation? 
READ:LTE:MEAS<i>:PRACh:PDYNamics:CURRent? 
READ:LTE:MEAS<i>:PRACh:PDYNamics:AVERage? 
READ:LTE:MEAS<i>:PRACh:PDYNamics:MINimum? 
READ:LTE:MEAS<i>:PRACh:PDYNamics:MAXimum? 
READ:LTE:MEAS<i>:PRACh:PDYNamics:SDEViation? 
CALCulate:LTE:MEAS<i>:PRACh:PDYNamics:CURRent? 
CALCulate:LTE:MEAS<i>:PRACh:PDYNamics:AVERage? 
CALCulate:LTE:MEAS<i>:PRACh:PDYNamics:MINimum? 
CALCulate:LTE:MEAS<i>:PRACh:PDYNamics:MAXimum? 
Return the current, average, minimum, maximum and standard deviation single value results of the power dynamics measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
LTE:
​
MEAS<i>:
​
PRACh:
​
SCOunt:
​
PDYNamics
) exceeding the specified power dynamics limits.
Range: 
0 %  to  100 %
Default unit: 
%
<OffPowerBefore>
OFF power mean value for subframe before preamble without transient period
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerRMS>
ON power mean value over preamble
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerPeak>
ON power peak value within preamble
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OffPowerAfter>
OFF power mean value for subframe after preamble without transient period
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
V2.0.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top