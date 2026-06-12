# CALCulateNIOTMEASiPRAChPDYNamicsCURRent

Module: NBIoT Measurements
Source: 14fedcea434a4092.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Power Dynamics Results (Single Values)
 > 
CALCulate:NIOT:MEAS<i>:PRACh:PDYNamics:CURRent?
CALCulate:NIOT:MEAS<i>:PRACh:PDYNamics:CURRent? 
CALCulate:NIOT:MEAS<i>:PRACh:PDYNamics:AVERage? 
CALCulate:NIOT:MEAS<i>:PRACh:PDYNamics:MINimum? 
CALCulate:NIOT:MEAS<i>:PRACh:PDYNamics:MAXimum? 
FETCh:NIOT:MEAS<i>:PRACh:PDYNamics:CURRent? 
FETCh:NIOT:MEAS<i>:PRACh:PDYNamics:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:PDYNamics:MINimum? 
FETCh:NIOT:MEAS<i>:PRACh:PDYNamics:MAXimum? 
FETCh:NIOT:MEAS<i>:PRACh:PDYNamics:SDEViation? 
READ:NIOT:MEAS<i>:PRACh:PDYNamics:CURRent? 
READ:NIOT:MEAS<i>:PRACh:PDYNamics:AVERage? 
READ:NIOT:MEAS<i>:PRACh:PDYNamics:MINimum? 
READ:NIOT:MEAS<i>:PRACh:PDYNamics:MAXimum? 
READ:NIOT:MEAS<i>:PRACh:PDYNamics:SDEViation? 
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
NIOT:
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
OFF power before the preamble
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerRMS>
ON power mean value
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerPeak>
ON power peak value
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OffPowerAfter>
OFF power after the preamble
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