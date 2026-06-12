# CALCulateLTEMEASiMEValuationLISTSEGMentnoESFLatnessCURRent

Module: LTE Measurements
Source: bc5a6e82e24b456c.htm

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
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:EXTReme? 
Return equalizer spectrum flatness single value results for segment <no> in list mode.
To define the statistical length for 
AVERage
 and 
EXTReme
 calculation and enable the calculation of the results see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
MODulation
.
The values described below are returned by 
FETCh
 commands. The first four values (reliability to out-of-tolerance result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
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
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.0.20: CALCulate commands
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top