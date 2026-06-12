# FETChGSMMEASiMEValuationMODulationPERCentile

Module: GSM Measurements
Source: f58064231a254561.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:MODulation:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:MODulation:PERCentile? 
READ:GSM:MEAS<i>:MEValuation:MODulation:PERCentile? 
CALCulate:GSM:MEAS<i>:MEValuation:MODulation:PERCentile? 
Returns the 95th percentile results of the multi-evaluation measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTolerance>
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
MODulation
) exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_EVMRMS>
Error vector magnitude percentile
Range: 
0 %  to  100 %
Default unit: 
%
<4_MagnitudeError>
Magnitude error percentile
Range: 
0 %  to  100 %
Default unit: 
%
<5_PhaseError>
Phase error percentile
Range: 
0 deg  to  180 deg
Default unit: 
deg
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top