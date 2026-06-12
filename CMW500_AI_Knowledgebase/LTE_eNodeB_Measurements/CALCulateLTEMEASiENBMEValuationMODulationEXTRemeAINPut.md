# CALCulateLTEMEASiENBMEValuationMODulationEXTRemeAINPut

Module: LTE eNodeB Measurements
Source: 733e1bfe3b7a41ae.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:MODulation:EXTReme:AINPut?
CALCulate:LTE:MEAS<i>:ENB:MEValuation:MODulation:EXTReme:AINPut? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MODulation:EXTReme:AINPut? 
READ:LTE:MEAS<i>:ENB:MEValuation:MODulation:EXTReme:AINPut? 
Return the extreme single value results for the additional RF input (scenario "Two RF In").
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
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<TimingAlignment>
Time alignment error
Range: 
-100E+3 ns  to  100E+3 ns
Default unit: 
s
<TXpowerMinimum>
Minimum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<TXpowerMaximum>
Maximum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<PeakPowerMin>
Minimum user equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<PeakPowerMax>
Maximum user equipment peak power
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
V3.5.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top