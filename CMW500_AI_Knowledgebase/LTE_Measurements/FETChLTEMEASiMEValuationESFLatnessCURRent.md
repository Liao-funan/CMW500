# FETChLTEMEASiMEValuationESFLatnessCURRent

Module: LTE Measurements
Source: 7af3e787f7e94dcb.htm

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
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:ESFLatness:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:ESFLatness:CURRent? 
READ:LTE:MEAS<i>:MEValuation:ESFLatness:AVERage? 
READ:LTE:MEAS<i>:MEValuation:ESFLatness:EXTReme? 
READ:LTE:MEAS<i>:MEValuation:ESFLatness:SDEViation? 
Return current, average, extreme and standard deviation single value results of the equalizer spectrum flatness measurement. See also 
"Equalizer Spectrum Flatness Limits"
.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified equalizer spectrum flatness limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Ripple1>
Max (range 1) - min (range 1)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<4_Ripple2>
Max (range 2) - min (range 2)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<5_MaxR1MinR2>
Max (range 1) - min (range 2)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
<6_MaxR2MinR1>
Max (range 2) - min (range 1)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
<7_MinR1>
Min (range 1)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<8_MaxR1>
Max (range 1)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<9_MinR2>
Min (range 2)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<10_MaxR2>
Max (range 2)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.25: added <7_MinR1> to <10_MaxR2>
Top