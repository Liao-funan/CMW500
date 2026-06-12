# FETChLTEMEASiSRSPDYNamicsCURRent

Module: LTE Measurements
Source: a3bc5307f9394c57.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Power Dynamics Results (Single Values)
 > 
FETCh:LTE:MEAS<i>:SRS:PDYNamics:CURRent?
FETCh:LTE:MEAS<i>:SRS:PDYNamics:CURRent? 
FETCh:LTE:MEAS<i>:SRS:PDYNamics:AVERage? 
FETCh:LTE:MEAS<i>:SRS:PDYNamics:MINimum? 
FETCh:LTE:MEAS<i>:SRS:PDYNamics:MAXimum? 
FETCh:LTE:MEAS<i>:SRS:PDYNamics:SDEViation? 
READ:LTE:MEAS<i>:SRS:PDYNamics:CURRent? 
READ:LTE:MEAS<i>:SRS:PDYNamics:AVERage? 
READ:LTE:MEAS<i>:SRS:PDYNamics:MINimum? 
READ:LTE:MEAS<i>:SRS:PDYNamics:MAXimum? 
READ:LTE:MEAS<i>:SRS:PDYNamics:SDEViation? 
CALCulate:LTE:MEAS<i>:SRS:PDYNamics:CURRent? 
CALCulate:LTE:MEAS<i>:SRS:PDYNamics:AVERage? 
CALCulate:LTE:MEAS<i>:SRS:PDYNamics:MINimum? 
CALCulate:LTE:MEAS<i>:SRS:PDYNamics:MAXimum? 
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
SRS:
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
OFF power mean value for time period before SRS symbol
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerRMS1>
ON power mean value over the first SRS symbol
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerPeak1>
ON power peak value for the first SRS symbol
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerRMS2>
ON power mean value over the second SRS symbol (NCAP returned for FDD)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerPeak2>
ON power peak value for the second SRS symbol (NCAP returned for FDD)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OffPowerAfter>
OFF power mean value for subframe after SRS symbol
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