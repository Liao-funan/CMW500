# FETChLTEMEASiMEValuationLISTSEGMentnoESFLatnessCURRent

Module: LTE Measurements
Source: 1a6de6224dd541c5.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:SDEViation? 
Return equalizer spectrum flatness single value results for segment <no> in list mode.
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
<5_Ripple1>
Max (range 1) - min (range 1)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<6_Ripple2>
Max (range 2) - min (range 2)
Range: 
0 dB  to  40 dB
Default unit: 
dB
<7_MaxR1MinR2>
Max (range 1) - min (range 2)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
<8_MaxR2MinR1>
Max (range 2) - min (range 1)
Range: 
-40 dB  to  40 dB
Default unit: 
dB
<9_MinR1>
Min (range 1)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<10_MaxR1>
Max (range 1)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<11_MinR2>
Min (range 2)
Range: 
-20 dB  to  20 dB
Default unit: 
dB
<12_MaxR2>
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
V2.0.20: CALCulate commands
V2.1.25: increased maximum number of segments to 250, added <9_MinR1> to <12_MaxR2>
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top