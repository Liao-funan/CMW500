# FETChWCDMaMEASiMEValuationMODulationUEPHd

Module: WCDMA Measurements
Source: 897040df235441ae.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:MODulation:UEPHd?
FETCh:WCDMa:MEAS<i>:MEValuation:MODulation:UEPHd? 
READ:WCDMa:MEAS<i>:MEValuation:MODulation:UEPHd? 
CALCulate:WCDMa:MEAS<i>:MEValuation:MODulation:UEPHd? 
Returns the UE phase discontinuity single value results for signals without HSPA channels. The results depend on the upper limit and the dynamic limit, see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
PHD
.
See also 
"Detailed Views: Phase Discontinuity"
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<OverallMaxPhD>
Overall maximum phase discontinuity
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<OverallMinDist>
Overall minimum slot distance between two results exceeding the dynamic limit
Default unit: 
slots
<CountUpperLimit>
Number of results exceeding the upper limit
Range: 
0  to  99999999
<CountDynLimit>
Number of results exceeding the dynamic limit
Range: 
0  to  99999999
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top