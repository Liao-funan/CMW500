# CALCulateNIOTMEASiMEValuationPDYNamicsCURRent

Module: NBIoT Measurements
Source: b989f57c2aad45f3.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Dynamics Results
 > 
CALCulate:NIOT:MEAS<i>:MEValuation:PDYNamics:CURRent?
CALCulate:NIOT:MEAS<i>:MEValuation:PDYNamics:CURRent? 
CALCulate:NIOT:MEAS<i>:MEValuation:PDYNamics:AVERage? 
CALCulate:NIOT:MEAS<i>:MEValuation:PDYNamics:MINimum? 
CALCulate:NIOT:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
FETCh:NIOT:MEAS<i>:MEValuation:PDYNamics:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:PDYNamics:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:PDYNamics:MINimum? 
FETCh:NIOT:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
FETCh:NIOT:MEAS<i>:MEValuation:PDYNamics:SDEViation? 
READ:NIOT:MEAS<i>:MEValuation:PDYNamics:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:PDYNamics:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:PDYNamics:MINimum? 
READ:NIOT:MEAS<i>:MEValuation:PDYNamics:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:PDYNamics:SDEViation? 
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
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for power dynamics measurements exceeding the specified power dynamics limits.
Range: 
0 %  to  100 %
Default unit: 
%
<OffPowerBefore>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerRMS>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OnPowerPeak>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OffPowerAfter>
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
V3.5.10
Top