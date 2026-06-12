# READGSMMEASiMEValuationSSWitching

Module: GSM Measurements
Source: 8b1168f9f4844bef.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Switching Results
 > 
READ:GSM:MEAS<i>:MEValuation:SSWitching?
READ:GSM:MEAS<i>:MEValuation:SSWitching? 
FETCh:GSM:MEAS<i>:MEValuation:SSWitching? 
Returns general spectrum switching results.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolCount>
Percentage of measurement intervals / bursts of the statistic count (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
SSWitching
) exceeding the specified limits, see 
"Limits (Spectrum Switching)"
Range: 
0 %  to  100 %
Default unit: 
%
<CarrierPower>
Measured carrier output power (reference power)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Statistical Overviews"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top