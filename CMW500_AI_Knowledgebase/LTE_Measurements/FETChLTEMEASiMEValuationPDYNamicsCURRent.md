# FETChLTEMEASiMEValuationPDYNamicsCURRent

Module: LTE Measurements
Source: d3c0b4f98cfa4141.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Dynamics Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:PDYNamics:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:PDYNamics:CURRent? 
READ:LTE:MEAS<i>:MEValuation:PDYNamics:AVERage? 
READ:LTE:MEAS<i>:MEValuation:PDYNamics:MINimum? 
READ:LTE:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:PDYNamics:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:PDYNamics:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:PDYNamics:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:PDYNamics:MINimum? 
CALCulate:LTE:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
Return the current, average, minimum, maximum and standard deviation single value results of the power dynamics measurement.
A single result table row is returned, from left to right. The meaning of the values depends on the selected time mask, as follows:
Time mask
Power1
Power2
Power3
Power4
General on / off
OFF power (before)
ON power RMS
ON power peak
OFF power (after)
PUCCH / PUSCH / SRS
SRS ON
ON power RMS
ON power peak
ON power (after)
SRS blanking
SRS OFF
ON power RMS
ON power peak
ON power (after)
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
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for power dynamics measurements exceeding the specified power dynamics limits.
Range: 
0 %  to  100 %
Default unit: 
%
<Power1>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<Power2>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<Power3>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<Power4>
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
Top