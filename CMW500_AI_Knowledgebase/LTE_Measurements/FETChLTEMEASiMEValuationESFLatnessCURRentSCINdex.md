# FETChLTEMEASiMEValuationESFLatnessCURRentSCINdex

Module: LTE Measurements
Source: 21dd632e52f04c6d.htm

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
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent:SCINdex?
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent:SCINdex? 
Returns subcarrier indices of the equalizer spectrum flatness measurement. At these SC indices, the current minimum and maximum power of the equalizer coefficients have been detected within range 1 and range 2.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified equalizer spectrum flatness limits.
Range: 
0 %  to  100 %
<Maximum1>
SC index of "Max (Range 1)"
Range: 
0  to  1199
<Minimum1>
SC index of "Min (Range 1)"
Range: 
0  to  1199
<Maximum2>
SC index of "Max (Range 2)"
Range: 
0  to  1199
<Minimum2>
SC index of "Min (Range 2)"
Range: 
0  to  1199
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Top