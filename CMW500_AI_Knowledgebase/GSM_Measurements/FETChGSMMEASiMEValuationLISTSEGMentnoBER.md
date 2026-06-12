# FETChGSMMEASiMEValuationLISTSEGMentnoBER

Module: GSM Measurements
Source: 1d27d761b5af409b.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:BER?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:BER? 
Returns the BER results for segment <no> in list mode.
Suffix: 
<no>
1..512
Relative number within the range of measured segments
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Number of measured steps
Range: 
0  to  <Statistical Length> (integer value)
<4_BurstType>
GMSK |
 
 EPSK |
 
 ACCess |
 
 OFF
Detected burst type of the last measured burst
GMSK:
 Normal burst, GMSK-modulated
EPSK:
 Normal burst, 8PSK-modulated
ACCess:
 Access burst
OFF:
 Inactive slot
<5_SlotStatistic>
ON |
 
 OFF
ON:
 Averaging over different burst type
OFF:
 Uniform burst type in the averaging range
<6_BER>
% bit error rate
Range: 
0 %  to  100 %
Default unit: 
%
<7_BERabsolute>
Total number of detected bit errors
The BER measurement evaluates:
114 data bits per GMSK-modulated normal burst
306 data bits per 8PSK-modulated burst.
Range: 
0  to  <no. of measured bits>
<8_BERcount>
Total number of measured bursts
Range: 
0  to  <StatisticCount>
For 
<StatisticCount>
, see 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
BER
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.30: increased number of measured segments (from 200)
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top