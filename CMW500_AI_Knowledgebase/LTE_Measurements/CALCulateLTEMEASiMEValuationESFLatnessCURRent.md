# CALCulateLTEMEASiMEValuationESFLatnessCURRent

Module: LTE Measurements
Source: ac7819a0b5244acb.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Equalizer Spectrum Flatness Results
 > 
CALCulate:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:ESFLatness:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:ESFLatness:EXTReme? 
Return current, average and extreme single value results of the equalizer spectrum flatness measurement. See also 
"Equalizer Spectrum Flatness Limits"
.
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
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified equalizer spectrum flatness limits.
Range: 
0 %  to  100 %
Default unit: 
%
<Ripple1>
Max (range 1) - min (range 1)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<Ripple2>
Max (range 2) - min (range 2)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<MaxR1MinR2>
Max (range 1) - min (range 2)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
<MaxR2MinR1>
Max (range 2) - min (range 1)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Top