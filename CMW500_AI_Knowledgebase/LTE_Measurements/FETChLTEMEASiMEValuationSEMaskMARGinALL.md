# FETChLTEMEASiMEValuationSEMaskMARGinALL

Module: LTE Measurements
Source: 2f466556c01c4fa7.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:ALL?
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:ALL? 
Returns spectrum emission mask margin results. A negative margin indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Results are provided for the current, average and maximum traces. For each trace, 24 values related to the negative (Neg) and positive (Pos) offset frequencies of emission mask areas 1 to 12 are provided. For inactive areas, NCAP is returned.
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
<3_CurrNeg1> ... <14_CurrNeg12> <15_CurrPos1> ... <26_CurrPos12>
Margin results for current trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<27_AvgNeg1> ... <38_AvgNeg12> <39_AvgPos1> ... <50_AvgPos12>
Margin results for average trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<51_MinNeg1> ... <62_MinNeg12> <63_MinPos1> ... <74_MinPos12>
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
V3.2.80
Top