# FETChLTEMEASiENBMEValuationSEMaskMARGin

Module: LTE eNodeB Measurements
Source: 24fe77631321413d.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Single Values)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:SEMask:MARGin?
FETCh:LTE:MEAS<i>:ENB:MEValuation:SEMask:MARGin? 
READ:LTE:MEAS<i>:ENB:MEValuation:SEMask:MARGin? 
Returns spectrum emission mask margin results. A negative margin indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Results are provided for the current, average and maximum traces. For each trace, 20 values related to the negative (Neg) and positive (Pos) offset frequencies of emission mask areas 1 to 10 are provided. For inactive areas NCAP is returned.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for spectrum emission measurements exceeding the specified spectrum emission mask limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_CurrNeg1> ... <12_CurrNeg10> <13_CurrPos1> ... <22_CurrPos10>
Margin results for current trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<23_AvgNeg1> ... <32_AvgNeg10> <33_AvgPos1> ... <42_AvgPos10>
Margin results for current trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<43_MinNeg1> ... <52_MinNeg10> <53_MinPos1> ... <62_MinPos10>
Margin results for maximum trace (resulting in minimum margins)
Range: 
-160 dB  to  160 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top