# FETChGSMMEASiMEValuationLISTSEGMentnoPVTimeCURRentSVECtor

Module: GSM Measurements
Source: 67c9cf4e22ce4367.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:AVERage:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MINimum:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MAXimum:SVECtor? 
Returns special burst power results for segment <no> in list mode.
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
 
 Q16 |
 
 OFF
Detected burst type of the last measured burst
GMSK:
 Normal burst, GMSK-modulated
EPSK:
 Normal burst, 8PSK-modulated
ACCess:
 Access burst
Q16:
 Normal burst, 16-QAM-modulated
OFF:
 Inactive slot
<5_SlotStatistic>
ON |
 
 OFF
ON:
 Averaging over different burst type
OFF:
 Uniform burst type in the averaging range
<6_OutOfTolerance>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<7_UsefulPartMin> <8_UsefulPartMax>
Minimum and maximum power across the useful part of the burst
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<9_Subvector1> ... <20_Subvector12>
Burst power at position in μs: –28, –18, –10, 0, 2, 4, 538.2, 540.2, 542.8, 552.8, 560.8, 570.8.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
V3.2.30: increased number of measured segments (from 200)
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top