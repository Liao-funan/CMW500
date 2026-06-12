# FETChWCDMaMEASiMEValuationMODulationPHDHsdpcch

Module: WCDMA Measurements
Source: c15b53c9487b4c59.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:MODulation:PHDHsdpcch?
FETCh:WCDMa:MEAS<i>:MEValuation:MODulation:PHDHsdpcch? 
READ:WCDMa:MEAS<i>:MEValuation:MODulation:PHDHsdpcch? 
CALCulate:WCDMa:MEAS<i>:MEValuation:MODulation:PHDHsdpcch? 
Returns the phase discontinuity HS-DPCCH single value results for signals with HS-DPCCH. The results depend on the dynamic limit and points A and B (see 
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
PHSDpcch
).
See also 
"Detailed Views: Phase Discontinuity"
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
<2_MaxPhD>
Overall maximum phase discontinuity
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<3_MeasPoints>
Total number of results measured since the start of the measurement (point A + point B)
Range: 
0  to  99999999
<4_CountDynLimit>
Number of results exceeding the limit
Range: 
0  to  99999999
<5_RatioDynLimit>
Percentage of results exceeding the limit
Range: 
0 %  to  100 %
Default unit: 
%
<6_PointAcurr>
Current phase discontinuity at point A
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<7_PointAmax>
Maximum phase discontinuity at point A
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<8_PointBcurr>
Current phase discontinuity at point B
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<9_PointBmax>
Maximum phase discontinuity at point B
Range: 
-180 deg  to  180 deg
Default unit: 
deg
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