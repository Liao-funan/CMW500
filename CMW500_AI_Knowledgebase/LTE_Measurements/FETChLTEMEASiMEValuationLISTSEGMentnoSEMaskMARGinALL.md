# FETChLTEMEASiMEValuationLISTSEGMentnoSEMaskMARGinALL

Module: LTE Measurements
Source: c471fab16737483a.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL? 
Return limit line margin values, i.e. vertical distances between the spectrum emission mask limit line and a trace, for segment <no> in list mode.
Suffix: 
<no>
1..1000
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<4_OutOfTol>
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<5_CurrNeg1> ... <16_CurrNeg12> <17_CurrPos1> ... <28_CurrPos12>
Margin results for current trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<29_AvgNeg1> ... <40_AvgNeg12> <41_AvgPos1> ... <52_AvgPos12>
Margin results for average trace
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<53_MinNeg1> ... <64_MinNeg12> <65_MinPos1> ... <76_MinPos12>
Margin results for maximum trace (i.e. minimum margins)
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
Options: 
R&S CMW-KM012
Top