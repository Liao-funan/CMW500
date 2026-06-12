# READGSMMEASiMEValuationSMODulation

Module: GSM Measurements
Source: 7b4f66b928184a6a.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Modulation Results
 > 
READ:GSM:MEAS<i>:MEValuation:SMODulation?
READ:GSM:MEAS<i>:MEValuation:SMODulation? 
FETCh:GSM:MEAS<i>:MEValuation:SMODulation? 
Returns general spectrum modulation results.
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
SMODulation
) exceeding the specified limits (see 
"Limits (Spectrum Modulation)"
).
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