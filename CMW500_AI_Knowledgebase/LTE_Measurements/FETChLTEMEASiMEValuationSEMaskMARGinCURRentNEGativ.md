# FETChLTEMEASiMEValuationSEMaskMARGinCURRentNEGativ

Module: LTE Measurements
Source: 58896035a96e4617.htm

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
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:NEGativ?
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:POSitiv? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:AVERage:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:AVERage:POSitiv? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:MINimum:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:MARGin:MINimum:POSitiv? 
Returns spectrum emission mask margin results. A negative margin indicates that the trace is located above the limit line, i.e. the limit is exceeded.
The individual commands provide results for the 
CURRent
, 
AVERage
 and maximum traces (resulting in 
MINimum
 margins). For each trace, the X and Y values of the margins for emission mask areas 1 to 12 are provided for 
NEGative
 and 
POSitive
 offset frequencies. For inactive areas, NCAP is returned.
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
<3_MarginX1>
X-position of margin for area 1
Range: 
-35 MHz  to  35 MHz
Default unit: 
Hz
<4_MarginY1>
Y-value of margin for area 1
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<5_MarginX2> <6_MarginY2> ... <25_MarginX12> <26_MarginY12>
X-position and Y-value of margin for area 2 to 12
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V3.2.80: increased number of areas to 12
Top